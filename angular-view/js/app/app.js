var app = angular.module('ComplexViewApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/home',{
        action: 'main.home'
    }).when('/category', {
        action: 'main.category'
    }).when('/category/:list', {
        action: 'main.category'
    }).when('/category/list/:categoryName', {
        action: 'main.category.list'
    }).when('/contact', {
        action: 'main.contact'
    }).when('/contact/:personId', {
        action: 'main.contact'
    }).when('/product-detail/:id', {
        action: 'main.product-detail'
    });
});