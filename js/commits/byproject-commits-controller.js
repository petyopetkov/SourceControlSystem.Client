(function () {
    'use strict';
    function ByprojectCommitsController($routeParams, commits, projects, identity) {
        var vm = this;
        vm.identity = identity;

        vm.request = {
            page: 1
        };
        vm.prevPage = function () {
            if (vm.request.page === 1) {
                return;
            }
            vm.request.page -= 1;
        };
        vm.nextPage = function () {
            if (!vm.projects || vm.projects.length === 0) {
                return;
            }
            vm.request.page += 1;
        };

        vm.filterCommits = function () {
            commits.getFilteredCommits($routeParams.id, vm.request)
                .then(function (filteredCommits) {
                    vm.commits = filteredCommits;
                });
        };

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
