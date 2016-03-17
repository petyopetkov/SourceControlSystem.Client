(function () {
    'use strict';

    function HomeController(stats) {
        var vm = this;
        stats.getStats()
            .then(function (statistics) {
                vm.stats = statistics;
            });
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['stats', HomeController]);
}());
