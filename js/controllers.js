'use strict';


var controllers = angular.module("dabble.controllers", []);


controllers.controller("appCtrl", function($scope){
    $scope.name = "World";

});

controllers.controller("ShotsListCtrl", function($scope, $http){
    $http.jsonp("http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK").then(function (info){
    $scope.list = info.data;
    console.log(info);
    });
    
});