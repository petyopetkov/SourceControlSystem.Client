(function () {
    'use strict';
    function CollaboratorsProjectController($routeParams, projects, identity) {
        var vm = this;
        vm.identity = identity;

        projects.getCollaborators($routeParams.id)
            .then(function (allCollaborators) {
                vm.collaborators = allCollaborators;
            });
    }
    angular.module('myApp.controllers')
        .controller('CollaboratorsProjectController', ['$routeParams', 'projects', 'identity', CollaboratorsProjectController]);
}());
