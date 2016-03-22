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

        function getFilteredProjects(filters) {
            return data.get(PROJECTS_URL + '/all', filters);
        }

        function getAll() {
            return data.get(PROJECTS_URL + '/all');
        }

        function addProject(newProject) {
            return data.post(PROJECTS_URL, newProject);
        }

        function getCollaborators(id) {
            return data.get(PROJECTS_URL + '/collaborators/' + id);
        }

        return {
            getPublicProjects: getPublicProjects,
            getById: getById,
            getFilteredProjects: getFilteredProjects,
            getAll: getAll,
            addProject: addProject,
            getCollaborators: getCollaborators
        };
    }

    angular.module('myApp.services')
        .factory('projects', ['data', projects]);
}());
