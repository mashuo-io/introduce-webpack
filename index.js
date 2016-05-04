console.log(2 ** 2);

(async () => {
	let a = await new Promise (resolve=> setTimeout(()=> resolve(1), 100));
	console.log('stage-3', a);
})();

let obj = {a:1, b:1};
let newObj = {...obj, c:1};
console.log(newObj);

class A {
	name ="ron";
}

let a = new A();
console.log(a);

@prefix
class B {
	@readonly
	name='ron';
}

function prefix(c) {
	c.prototype.do= ()=>{console.log('done')};
}

function readonly(target, property, descriptor) {
	Object.defineProperty(target, property, Object.assign(descriptor, {writable: false}));
}

let b = new B();
b.do();
console.log(b);
b.name = 'jack';
console.log(b);