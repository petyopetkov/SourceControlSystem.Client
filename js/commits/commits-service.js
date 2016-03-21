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

        function addCommit(newCommit) {
            return data.post(COMMITS_URL, newCommit);
        }

        return {
            getCommits: getCommits,
            getById: getById,
            addCommit: addCommit
        };
    }

    angular.module('myApp.services')
        .factory('commits', ['data', commits]);
}());
