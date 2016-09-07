var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $locationProvider) {

  // -- Vars --
  var mainState = {
    name: 'main',
    url: '/',
    template: '<h2>Main Page</h2>'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h2>About Page</h2>'
  };

  // -- States --
  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);

  // -- Pretty URLs --
  $locationProvider.html5Mode(true);
});
