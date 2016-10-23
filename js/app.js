var app = angular.module("shoppingSite",['ngRoute'])
app.config(function($routeProvider, $locationProvider){
  $routeProvider
      .when('/', {
          templateUrl: 'templates/items.html',
          controller: "shoppingItem"
      })
      .when('/cart/',{
        templateUrl: 'templates/cart.html',
        controller:"shoppingItem"
      })
})
