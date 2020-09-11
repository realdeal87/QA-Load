var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11434",
        "ok": "10601",
        "ko": "833"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "48",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "7399",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "204",
        "ok": "188",
        "ko": "420"
    },
    "standardDeviation": {
        "total": "862",
        "ok": "512",
        "ko": "2612"
    },
    "percentiles1": {
        "total": "58",
        "ok": "94",
        "ko": "4"
    },
    "percentiles2": {
        "total": "98",
        "ok": "98",
        "ko": "4"
    },
    "percentiles3": {
        "total": "1107",
        "ok": "1108",
        "ko": "1030"
    },
    "percentiles4": {
        "total": "3139",
        "ok": "3137",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9930,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 450,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 221,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 833,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.113",
        "ok": "35.337",
        "ko": "2.777"
    }
},
contents: {
"req_openmainpage-e7d7d": {
        type: "REQUEST",
        name: "openMainPage",
path: "openMainPage",
pathFormatted: "req_openmainpage-e7d7d",
stats: {
    "name": "openMainPage",
    "numberOfRequests": {
        "total": "5718",
        "ok": "5268",
        "ko": "450"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "92",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "10001",
        "ok": "7399",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "319",
        "ok": "302",
        "ko": "522"
    },
    "standardDeviation": {
        "total": "843",
        "ok": "667",
        "ko": "1942"
    },
    "percentiles1": {
        "total": "98",
        "ok": "98",
        "ko": "4"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "5"
    },
    "percentiles3": {
        "total": "1160",
        "ok": "1160",
        "ko": "2133"
    },
    "percentiles4": {
        "total": "3147",
        "ok": "3143",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4652,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 421,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 195,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 450,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.06",
        "ok": "17.56",
        "ko": "1.5"
    }
}
    },"req_makeanorder-39af9": {
        type: "REQUEST",
        name: "makeAnOrder",
path: "makeAnOrder",
pathFormatted: "req_makeanorder-39af9",
stats: {
    "name": "makeAnOrder",
    "numberOfRequests": {
        "total": "5716",
        "ok": "5333",
        "ko": "383"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "48",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "4142",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "75",
        "ko": "300"
    },
    "standardDeviation": {
        "total": "867",
        "ok": "237",
        "ko": "3222"
    },
    "percentiles1": {
        "total": "53",
        "ok": "53",
        "ko": "4"
    },
    "percentiles2": {
        "total": "54",
        "ok": "54",
        "ko": "4"
    },
    "percentiles3": {
        "total": "58",
        "ok": "59",
        "ko": "9"
    },
    "percentiles4": {
        "total": "1108",
        "ok": "1104",
        "ko": "7595"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5278,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 383,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.053",
        "ok": "17.777",
        "ko": "1.277"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
