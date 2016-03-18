(function () {
    'use strict';
    function ProjectsController(projects, identity) {
        var vm = this;
        vm.identity = identity;

        projects.getAll()
            .then(function (allProjects) {
                vm.projects = allProjects;
            });
    }

    angular.module('myApp.controllers')
        .controller('ProjectsController', ['projects', 'identity', ProjectsController]);
}());
