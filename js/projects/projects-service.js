(function () {
    'use strict';
    function projects(data) {
        function getPublicProjects() {
            return data.get('api/projects');
        }

        function getById(id) {
            return data.get('api/projects' + '/' + id);
        }

        return {
            getPublicProjects: getPublicProjects,
            getById: getById
        };
    }

    angular.module('myApp.services')
        .factory('projects', ['data', projects]);
}());
