(function () {
    'use strict';

    function data($http, $q, authorization, notifier, baseServiceUrl) {
        function getErrorMsg(responce) {
            var error = responce.data.modelState;
            if (error && error[Object.keys(error)[0]][0]) {
                error = error[Object.keys(error)[0]][0];
            } else {
                error = responce.data.message;
            }

            return error;
        }
        
        function get(url, queryParams) {
            var deferred = $q.defer(),
                authHeader = authorization.getAuthorizationHeader();

            $http.get(baseServiceUrl + '/' + url, {params: queryParams, headers: authHeader})
                .then(function (responce) {
                    deferred.resolve(responce.data);
                }, function (err) {
                    err = getErrorMsg(err);
                    notifier.error(err);
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function post(url, postData) {
            var deferred = $q.defer(),
                authHeader = authorization.getAuthorizationHeader();

            $http.post(baseServiceUrl + '/' + url, postData, {headers: authHeader})
                .then(function (responce) {
                    deferred.resolve(responce.data);
                }, function (err) {
                    err = getErrorMsg(err);
                    notifier.error(err);
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function put(url) {
            var deferred = $q.defer(),
                authHeader = authorization.getAuthorizationHeader();

            $http.put(baseServiceUrl + '/' + url, {headers: authHeader})
                .then(function (responce) {
                    deferred.resolve(responce.data);
                }, function (err) {
                    err = getErrorMsg(err);
                    notifier.error(err);
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        return {
            get: get,
            post: post,
            put: put
        };
    }


    angular.module('myApp.services')
        .factory('data', ['$http', '$q', 'authorization', 'notifier', 'baseServiceUrl', data]);
}());
