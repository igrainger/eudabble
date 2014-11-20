'use strict';


var app = angular.module("dabbble", [
    "dabble.controllers", 
    "dabbble.filters", 
    "dabbble.Services"
]);

app.config(function ($routeProvider) {
        $routeProvider
        .when("/shots/:id", {controller:"shotsCtrl", templateUrl: "partials/shot.html"})
        .when("/:list", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
        .otherwise({redirectTo: "/popular"});

});