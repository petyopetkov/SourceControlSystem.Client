(function () {
    'use strict';
    function DetailsCommitController($routeParams, commits, identity) {
        var vm = this;
        vm.identity = identity;

        commits.getById($routeParams.id)
            .then(function (foundCommit) {
                vm.commit = foundCommit;
            });
    }

    angular.module('myApp.controllers')
        .controller('DetailsCommitController', ['$routeParams', 'commits', 'identity', DetailsCommitController]);
}());
