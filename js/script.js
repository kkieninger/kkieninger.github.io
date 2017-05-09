var app = angular.module('PortfolioViewerApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/main-view.html',
		controller: 'MainCtrl'
	});

	$routeProvider.when('/portfolio', {
		templateUrl: 'partials/portfolio-view.html',
		controller: 'PortfolioCtrl'
	});

	$routeProvider.when('/contact', {
		templateUrl: 'partials/contact-view.html',
		controller: 'ContactCtrl'
	});

	$routeProvider.otherwise({ redirectTo: '/'});

});

app.controller('MainCtrl', function(){

});

app.controller('PortfolioCtrl', function(){

});

app.controller('ContactCtrl', function(){

});