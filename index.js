//var $= require('jquery');
//require('./style.scss');
//	$('button').click(function(){alert('clicked1')});
document.addEventListener('DOMContentLoaded', () => {
	console.log('hi');
	let b = new B();
	b.do();
	let {name} = b;
	console.log('b\'s name is', name);

	let arr= [0,1,2,3,4];
	console.log('arr is now', [...arr.slice(0,2), ...arr.slice(3)])
});

class A {
	constructor() {
		console.log('constructing');
	}
}

class B extends A {
	do() {
		console.log('B is doing');
	}
	name= 'abc'
}