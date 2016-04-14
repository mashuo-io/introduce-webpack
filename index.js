var $= require('jquery');
require('./style.scss');
document.addEventListener('DOMContentLoaded', () => {
	$('button').click(function(){alert('clicked1')});
});