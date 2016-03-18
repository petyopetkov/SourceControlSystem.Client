(function () {
    'use strict';

    function HomeController(stats, projects) {
        var vm = this;
        stats.getStats()
            .then(function (statistics) {
                vm.stats = statistics;
            });
        projects.getPublicProjects()
            .then(function (foundProjects) {
                vm.projects = foundProjects;
            });
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['stats', 'projects', HomeController]);
}());
