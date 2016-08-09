require('angular')

var app = angular.module('app', []);

app.controller('MainController', function() {
	console.log('Angular is Running!');
});

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
	{
		name: 'Dodecahedron',
		price: 3.49,
		description: 'Everything is awesome',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Stuff',
		price: 5.49,
		description: 'Everything is awesome TOO!',
		canPurchase: true,
		soldOut: false
	}
];

app.controller('testimonialController', function(){
	this.opinion = thought;
});

var thought = {
	description: 'Poland bushwick microdosing tattoed. Cornhole single-origin coffee bicycle rights lubersexual, pour-over intelligentsia banh mi ethical selfies schlitz raw denim 90',
	author: 'Indiana Jones, Archeologist',
};

app.controller('quoteController', function(){
	this.quote = words;
});

var words = {
	description: 'Bacon ipsum dolor amet beef ribeye sausage, pig porchetta ham prosciutto corned beef biltong. Pig short ribs ham leberkas ball tip. T-bone bresaola venison, capicola fatback short ribs meatball filet mignon. Salami kevin sausage, brisket strip steak t-bone turkey pork bresaola ground round tongue meatloaf capicola beef prosciutto. Turducken kielbasa jowl bresaola strip steak, jerky short loin shankle shoulder t-bone flank doner. Kevin pastrami tongue short loin pork loin porchetta chicken venison swine.',
	cta: 'Tell me More',
};

app.controller("moviesController", function ($scope, $http){
	$http.get('movies.json').success(function(data){
		console.log(data);
		$scope.movies = data;
	});
});