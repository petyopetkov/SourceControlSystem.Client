(function () {
    'use strict';
    function commits(data) {
        var COMMITS_URL = 'api/commits';

        function getCommits() {
            return data.get(COMMITS_URL);
        }

        function getCommitsByProject(id) {
            return data.get(COMMITS_URL + '/byproject/' + id);
        }

        function addCommit(newCommit) {
            return data.post(COMMITS_URL, newCommit);
        }

        return {
            getCommits: getCommits,
            getCommitsByProject: getCommitsByProject,
            addCommit: addCommit
        };
    }

    angular.module('myApp.services')
        .factory('commits', ['data', commits]);
}());
