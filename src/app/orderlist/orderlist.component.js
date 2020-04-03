var app = angular.module('myApp', []);
    alert('hello');
    app.controller('myCtrl', function($scope) {
      $scope.firstname = "John";
      $scope.changeName = function() {
        $scope.firstname = "Nelly";
      }
    });