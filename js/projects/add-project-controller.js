(function () {
    'use strict';
    function AddProjectController($location, projects, licenses, notifier){
        var vm = this;
        licenses.getLicenses()
            .then(function (allLicenses) {
                vm.licenses = allLicenses;
            });
        vm.addProject = function (newProject) {
            projects.addProject(newProject)
                .then(function () {
                    notifier.success('Project added');
                    $location.path('projects');
                });
        };
    }

    angular.module('myApp.controllers')
        .controller('AddProjectController', ['$location', 'projects', 'licenses', 'notifier', AddProjectController]);
}());
