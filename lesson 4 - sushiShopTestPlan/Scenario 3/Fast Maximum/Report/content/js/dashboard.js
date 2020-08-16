/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 75.04229989482188, "KoPercent": 24.957700105178116};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.5461716689785528, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.37570690364769904, 500, 1500, "Open Main Page"], "isController": false}, {"data": [0.7166364343094066, 500, 1500, "Make an order"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 131206, 32746, 24.957700105178116, 15215.292928677112, 1, 131211, 34.0, 130158.9, 131029.0, 131073.0, 42.58251120173905, 61.646161898273675, 11.558368643706807], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Open Main Page", 65603, 20029, 30.530615977927837, 22854.929362986608, 2, 131211, 3036.0, 130459.0, 130924.0, 131063.0, 21.305395961837807, 45.81223556718801, 2.240344470130454], "isController": false}, {"data": ["Make an order", 65603, 12717, 19.384784232428395, 7575.656494367705, 1, 131200, 21.0, 32522.800000000003, 131064.0, 131073.0, 21.291870609766747, 15.864790096016753, 9.319780285895202], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.NoRouteToHostException\/Non HTTP response message: \\u041D\\u0435\\u0442 \\u043C\\u0430\\u0440\\u0448\\u0440\\u0443\\u0442\\u0430 \\u0434\\u043E \\u0443\\u0437\\u043B\\u0430 (Host unreachable)", 20441, 62.42289134550785, 15.579318018993034], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 185.233.0.230:3000 [\\\/185.233.0.230] failed: \\u0412\\u0440\\u0435\\u043C\\u044F \\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u0438\\u044F \\u0441\\u043E\\u0435\\u0434\\u0438\\u043D\\u0435\\u043D\\u0438\\u044F \\u0438\\u0441\\u0442\\u0435\\u043A\\u043B\\u043E (Connection timed out)", 12305, 37.57710865449215, 9.378382086185082], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 131206, 32746, "Non HTTP response code: java.net.NoRouteToHostException\/Non HTTP response message: \\u041D\\u0435\\u0442 \\u043C\\u0430\\u0440\\u0448\\u0440\\u0443\\u0442\\u0430 \\u0434\\u043E \\u0443\\u0437\\u043B\\u0430 (Host unreachable)", 20441, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 185.233.0.230:3000 [\\\/185.233.0.230] failed: \\u0412\\u0440\\u0435\\u043C\\u044F \\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u0438\\u044F \\u0441\\u043E\\u0435\\u0434\\u0438\\u043D\\u0435\\u043D\\u0438\\u044F \\u0438\\u0441\\u0442\\u0435\\u043A\\u043B\\u043E (Connection timed out)", 12305, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Open Main Page", 65603, 20029, "Non HTTP response code: java.net.NoRouteToHostException\/Non HTTP response message: \\u041D\\u0435\\u0442 \\u043C\\u0430\\u0440\\u0448\\u0440\\u0443\\u0442\\u0430 \\u0434\\u043E \\u0443\\u0437\\u043B\\u0430 (Host unreachable)", 10875, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 185.233.0.230:3000 [\\\/185.233.0.230] failed: \\u0412\\u0440\\u0435\\u043C\\u044F \\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u0438\\u044F \\u0441\\u043E\\u0435\\u0434\\u0438\\u043D\\u0435\\u043D\\u0438\\u044F \\u0438\\u0441\\u0442\\u0435\\u043A\\u043B\\u043E (Connection timed out)", 9154, null, null, null, null, null, null], "isController": false}, {"data": ["Make an order", 65603, 12717, "Non HTTP response code: java.net.NoRouteToHostException\/Non HTTP response message: \\u041D\\u0435\\u0442 \\u043C\\u0430\\u0440\\u0448\\u0440\\u0443\\u0442\\u0430 \\u0434\\u043E \\u0443\\u0437\\u043B\\u0430 (Host unreachable)", 9566, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 185.233.0.230:3000 [\\\/185.233.0.230] failed: \\u0412\\u0440\\u0435\\u043C\\u044F \\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u0438\\u044F \\u0441\\u043E\\u0435\\u0434\\u0438\\u043D\\u0435\\u043D\\u0438\\u044F \\u0438\\u0441\\u0442\\u0435\\u043A\\u043B\\u043E (Connection timed out)", 3151, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
