var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4600",
        "ok": "4600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1259",
        "ok": "1259",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles1": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles3": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4422,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 177,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.278",
        "ok": "1.278",
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
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "132",
        "ok": "132",
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
        "total": "1118",
        "ok": "1118",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3540,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 2
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
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1259",
        "ok": "1259",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles2": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1114",
        "ok": "1114",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1127",
        "ok": "1127",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 882,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 117,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.278",
        "ok": "0.278",
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
