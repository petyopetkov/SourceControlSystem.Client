(function () {
    'use strict';
    function stats($q, data) {
        var stats;

        function getStats() {
            if (stats) {
                return $q.when(stats);
            } else {
                return data.get('api/statistics')
                    .then(function (statistics) {
                        stats = statistics;
                        return stats;
                    });
            }
        }

        return {
            getStats: getStats
        };
    }

    angular.module('myApp.services')
        .factory('stats', ['$q', 'data', stats]);
}());
