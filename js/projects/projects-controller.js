(function () {
    'use strict';
    function ProjectsController(projects, identity) {
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

        vm.filterProjects = function () {
            projects.getFilteredProjects(vm.request)
                .then(function (filteredProjects) {
                    vm.projects = filteredProjects;
                });
        };

        projects.getAll()
            .then(function (allProjects) {
                vm.projects = allProjects;
            });
    }

    angular.module('myApp.controllers')
        .controller('ProjectsController', ['projects', 'identity', ProjectsController]);
}());
