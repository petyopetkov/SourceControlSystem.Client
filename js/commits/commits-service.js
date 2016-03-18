(function () {
    'use strict';
    function commits(data) {
        var COMMITS_URL = 'api/commits';

        function getCommits() {
            return data.get(COMMITS_URL);
        }

        function getById(id) {
            return data.get(COMMITS_URL + '/' + id);
        }

        return {
            getCommits: getCommits,
            getById: getById
        };
    }

    angular.module('myApp.services')
        .factory('commits', ['data', commits]);
}());
