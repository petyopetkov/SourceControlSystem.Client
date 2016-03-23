(function () {
    'use strict';
    function AddCollaboratorController($location, $routeParams, projects, identity, notifier) {
        var vm = this;
        vm.identity = identity;

        projects.getById($routeParams.id)
            .then(function (foundProject) {
                vm.project = foundProject;
            });

        vm.addCollaborator = function (collaborator) {
            projects.addCollaborator($routeParams.id, collaborator)
                .then(function () {
                    notifier.success('Collaborator added');
                    $location.path('projects');
                });
        };
    }
    angular.module('myApp.controllers')
        .controller('AddCollaboratorController', ['$location', '$routeParams', 'projects', 'identity', 'notifier', AddCollaboratorController]);
}());
