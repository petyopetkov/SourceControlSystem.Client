(function () {
    'use strict';
    function DetailsProjectController($routeParams, projects, identity) {
        var vm = this;
        vm.identity = identity;

        projects.getById($routeParams.id)
            .then(function (foundProject) {
                vm.project = foundProject;
            });
    }

    angular.module('myApp.controllers')
        .controller('DetailsProjectController', ['$routeParams', 'projects', 'identity', DetailsProjectController]);
}());
