var $= require('jquery');
require('./style.scss');
document.addEventListener('DOMContentLoaded', function() {
	console.log('hi');
	$('button').click(function(){alert('clicked1')});
});