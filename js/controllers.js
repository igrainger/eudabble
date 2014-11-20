'use strict';


var controllers = angular.module("dabble.controllers", []);


controllers.controller("appCtrl", function($scope, $http){
});

controllers.controller("ShotsListCtrl", function($scope, dribbble, $routeParams){
    
    var list = $routeParams.list;
    
    dribbble.list(list).then(function (info){
    $scope.list = info.data;
    console.log(info);
    });
    
    
    $scope.loadNextPage = function (){
        dribbble.list(list, {page: $scope.list.page + 1}).then(function (data){
            console.log(data);
            $scope.list.page = data.data.page;
            $scope.list.shots = $scope.list.shots.concat(data.data.shots);
        });
    }
    
});




controllers.controller("shotsCtrl", function($scope, dribbble, $routeParams){

    var id = $routeParams.id;
    
    dribbble.shot(id).then(function (info){
    $scope.shot = info.data;
    console.log(info);
    });
    
});