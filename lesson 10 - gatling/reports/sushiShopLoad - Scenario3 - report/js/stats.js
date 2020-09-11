var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7200",
        "ok": "7200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1156",
        "ok": "1156",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles2": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles3": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles4": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7197,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
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
        "total": "3600",
        "ok": "3600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1156",
        "ok": "1156",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles1": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles3": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "percentiles4": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3597,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
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
        "total": "3600",
        "ok": "3600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles1": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles2": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles3": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles4": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3600,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
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
