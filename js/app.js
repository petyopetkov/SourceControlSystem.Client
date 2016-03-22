(function () {
    'use strict';

    function config($routeProvider) {
        var CONTROLLER_AS_VIEW_MODEL = 'vm';
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/register', {
                templateUrl: 'views/partials/identity/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/projects/all', {
                templateUrl: 'views/partials/projects/all-projects.html',
                controller: 'ProjectsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/projects/create', {
                templateUrl: 'views/partials/projects/add-project.html',
                controller: 'AddProjectController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/projects/details/:id', {
                templateUrl: 'views/partials/projects/details-project.html',
                controller: 'DetailsProjectController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/commits/add/:id', {
                templateUrl: 'views/partials/commits/add-commit.html',
                controller: 'AddCommitController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/commits/byproject/:id', {
                templateUrl: 'views/partials/commits/byproject-commits.html',
                controller: 'ByprojectCommitsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/commits/:id', {
                templateUrl: 'views/partials/commits/details-commit.html',
                controller: 'DetailsCommitController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.filters', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'myApp.controllers', 'myApp.directives', 'myApp.filters']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('baseServiceUrl', 'http://localhost:42252');
}());