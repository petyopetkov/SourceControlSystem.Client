(function () {
    'use strict';
    function AddCommitController($routeParams, $location, identity, commits, notifier) {
        var vm = this;
        vm.identity = identity;

        vm.addCommit = function (newCommit) {
            newCommit.projectId = $routeParams.id;
            commits.addCommit(newCommit)
                .then(function () {
                    notifier.success('Commit added');
                    $location.path('projects/details/' + $routeParams.id);
                });
        };
    }

    angular.module('myApp.controllers')
        .controller('AddCommitController', ['$routeParams', '$location', 'identity', 'commits', 'notifier', AddCommitController]);
}());
