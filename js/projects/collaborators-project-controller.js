(function () {
    'use strict';
    function CollaboratorsProjectController($routeParams, projects, identity) {
        var vm = this;
        vm.identity = identity;

        projects.getCollaborators($routeParams.id)
            .then(function (allCollaborators) {
                vm.collaborators = allCollaborators;
            });
        projects.getById($routeParams.id)
            .then(function (foundProject) {
                vm.project = foundProject;
            });
    }
    angular.module('myApp.controllers')
        .controller('CollaboratorsProjectController', ['$routeParams', 'projects', 'identity', CollaboratorsProjectController]);
}());
