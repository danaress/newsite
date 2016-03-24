

var myApp = angular.module('myApp', ['ngRoute'])

// myApp.config(function($routeProvider) {
//         $routeProvider

//         .when('/test', {
//                 templateUrl : 'test.html',
//                 controller  : 'testController'
//             })})



myApp.controller('mainController', function($scope){

$scope.MWLS = function(){
  console.log("Balls");
}

  });

myApp.controller('testController', function($scope){

$scope.message = 'TEST MESSAGE';

  });