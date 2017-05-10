angular.module('app.routes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {

    $routeProvider

      .when('/', {
        templateUrl : 'app/views/pages/home.html'
      })
      .when('/login', {
        templateUrl : 'app/views/pages/login.html',
        controller : 'loginController',
        controllerAs : 'vm'
      })
      .when('/signup', {
        templateUrl : 'app/views/pages/signup.html',
        controller: 'signupController',
        controllerAs: 'vm'
      })
      .otherwise({
        templateUrl : 'app/views/pages/invalid.html'
      });

    $locationProvider.html5Mode(true);
  });