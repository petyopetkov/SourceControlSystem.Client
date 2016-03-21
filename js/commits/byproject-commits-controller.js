(function () {
    'use strict';
    function ByprojectCommitsController($routeParams, commits, projects, identity) {
        var vm = this;
        vm.identity = identity;

        commits.getCommitsByProject($routeParams.id)
            .then(function (foundCommits) {
                vm.commits = foundCommits;
            });
        projects.getById($routeParams.id)
            .then(function (project) {
                vm.project = project;
            });
    }

    angular.module('myApp.controllers')
        .controller('ByprojectCommitsController', ['$routeParams', 'commits', 'projects', 'identity', ByprojectCommitsController]);
}());
