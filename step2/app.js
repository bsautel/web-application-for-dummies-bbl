'use strict';

var homeRoute = '/home';
var tasksRoute = '/tasks';

function HelloController($scope) {
}

function TasksController($scope, $filter) {
    $scope.tasks = [
        {label: 'Find another BBL subject', done: false},
        {label: 'Release AFS 7.7', done: true}
    ];
    $scope.taskLabelFilter = '';
    
    $scope.countTasksToDo = function countTasksToDo() {
        return $filter('filter')($scope.tasks, {done: false}).length;
    };
    
    $scope.deleteTask = function deleteTask(task) {
        var index = $scope.tasks.indexOf(task);
        if (index > -1) {
            $scope.tasks.splice(index, 1);
        }
    };
    
    $scope.displayCreateTaskForm = function displayCreateTaskForm() {
        $scope.newTask = {label: '', done: false};
    };
    
    $scope.cancelTaskCreation = function cancelTaskCreation() {
        delete $scope.newTask;
    };
    
    $scope.createTask = function createTask() {
        $scope.tasks.push($scope.newTask);
        delete $scope.newTask;
    };
    
    $scope.isTaskValid = function isTaskValid() {
        return $scope.newTask && $scope.newTask.label.trim().length > 0;
    };
    
    $scope.filterTasks = function filterTasks() {
        if ($scope.taskLabelFilter.trim().length > 0) {
            return $filter('filter')($scope.tasks, function (task) {
                return task.label.toLowerCase().indexOf($scope.taskLabelFilter.toLowerCase()) != -1;
            });
        }
        return $scope.tasks;
    };
}

angular.module('demo', ['ngRoute']).config(
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