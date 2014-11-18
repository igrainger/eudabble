'use strict';


function appCtrl($scope) {
    $scope.name = "World!";
    $scope.updateName = function(){
        $scope.name = "World from function";
    }
}