(function () {
    'use strict';
    function projects(data) {
        var PROJECTS_URL = 'api/projects';

        function getPublicProjects() {
            return data.get(PROJECTS_URL);
        }

        function getById(id) {
            return data.get(PROJECTS_URL + '/' + id);
        }

        return {
            getPublicProjects: getPublicProjects,
            getById: getById
        };
    }

    angular.module('myApp.services')
        .factory('projects', ['data', projects]);
}());
