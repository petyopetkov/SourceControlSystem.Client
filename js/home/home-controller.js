(function () {
    'use strict';

    function HomeController(stats, projects, commits) {
        var vm = this;
        stats.getStats()
            .then(function (statistics) {
                vm.stats = statistics;
            });
        projects.getPublicProjects()
            .then(function (latestProjects) {
                vm.projects = latestProjects;
            });
        commits.getCommits()
            .then(function (latestCommits) {
                vm.commits = latestCommits;
            });
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['stats', 'projects', 'commits', HomeController]);
}());
