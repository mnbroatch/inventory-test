"use strict;"

var app = angular.module('inventoryApp', ['ui.bootstrap','ui.router']); 
app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('main', {url: '/', templateUrl: 'html/main.html'})
      .state('bathroom', {url: '/bathroom', templateUrl: 'html/bathroom.html'})
      .state('bedroom', {url: '/bedroom', templateUrl: 'html/bedroom.html'})
      .state('dungeon', {url: '/dungeon', templateUrl: 'html/dungeon.html'})

    $urlRouterProvider.otherwise('/');

});

