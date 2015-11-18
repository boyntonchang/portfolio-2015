//var app = angular.module('subtabApp',['ui.router']);
//app.config(function($stateProvider, $urlRouterProvider){
// $urlRouterProvider.otherwise('/subtabNynjtc');
// 
// $stateProvider
//  .state('subtabUwx', {
//   url:'../subtabUwx',
//   templateUrl:"tmpl/subtabUwx.html"
//
// })
// .state('subtabNynjtc', {
//   url:'/subtabNynjtc',
//  templateUrl:'./tmpl/subtabNynjtc.html'
// })
// .state('subtab100best', {
//   url:'/subtab100best',
//  templateUrl:'tmpl/subtab100best.html'
// })
// .state('subtabCampusview', {
//   url:'/subtabCampusview',
//  templateUrl:'tmpl/subtabCampusview.html'
// })
// .state('subtabDashboard', {
//   url:'/subtabDashboard',
//  templateUrl:'tmpl/subtabDashboard.html'
// })
// .state('subtabWireframes', {
//   url:'/subtabWireframes',
//  templateUrl:'tmpl/subtabWireframes.html'
// })
//})

var app = angular.module('subtabApp',['ngRoute']);
app.config(function($routeProvider){
 //$urlRouterProvider.otherwise('/subtabNynjtc');
 
 $routeProvider
 .when('/', {
  
   templateUrl:"tmpl/subtabUwx.html",
  controller:'uwxCtrl'

 })
  .when('#subtabUwx', {
  
   templateUrl:"tmpl/subtabUwx.html",
  controller:'uwxCtrl'

 })
 .when('#subtabNynjtc', {
   
  templateUrl:'tmpl/subtabNynjtc.html',
  controller:'nynjtcCtrl'
 })
 .when('/subtab100best', {
   
  templateUrl:'tmpl/subtab100best.html'
 })
 .when('/subtabCampusview', {
   
  templateUrl:'tmpl/subtabCampusview.html'
 })
 .when('/subtabDashboard', {
  
  templateUrl:'tmpl/subtabDashboard.html'
 })
 .when('/subtabWireframes', {
   
  templateUrl:'tmpl/subtabWireframes.html'
 });
});

app.controller('uwxCtrl', function($scope){
 $scope.message = "UWX";
 console.log("uwx");
});

app.controller('nynjtcCtrl', function($scope){
 $scope.message = "NYNJTC";
 console.log("nynjtc");
});