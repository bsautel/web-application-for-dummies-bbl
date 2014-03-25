'use strict';

var homeRoute = '/home';
var tasksRoute = '/tasks';

function HelloController($scope) {
}

function TasksController($scope) {
}

angular.module('demo', []).config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when(homeRoute, {templateUrl: 'home.html', controller: HelloController}).
                when(tasksRoute, {templateUrl: 'tasks.html', controller: TasksController}).
                otherwise({redirectTo: homeRoute});
            }
    ]);

function NavBarController($scope, $location) {
    $scope.isHello = function isHello() {
        return $location.path() == homeRoute;
    };
    $scope.isTasks = function isTasks() {
        return $location.path() == tasksRoute;
    };
}