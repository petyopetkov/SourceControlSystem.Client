(function () {
    'use strict';

    function beautifulDate() {
        return function (input) {
            var monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];

            var date = new Date(input),
                day = date.getDate(),
                monthIndex = date.getMonth(),
                year = date.getFullYear(),
                hour = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds(),
                ampm = (hour >= 12) ? "PM" : "AM";

            return monthNames[monthIndex] + ' ' + day + ',' + year + ' ' + hour + ':' + min + ':' + sec + ampm;
        };
    }

    angular.module('myApp.filters')
        .filter('beautifulDate', [beautifulDate]);
}());
