# Web Technologies with REACT

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub: https://github.com/BanuPrakash/REACT

-------------------------------------------------------------
Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ]

-------------------------------------------------------


JavaScript

----------

Scripting language ==> Interpreted / JIT compile => JavaScript engine
Loosely typed ==> based on the literla values ; engine will treat the variables as particular data type.

variables are variant data type

x = "Jack"; // string
x.toUpperCase();

x = 24; // number
x++;

x = false; // boolean

x = [4,6,2];

x = null; // in future Object is assigned

Data types ==> string, number, boolean, array, object, undefined, null

---------------------------

we use "var" keyword to declare a variable

"use strict"; // enforces variables to be declared before using it

var name = "Peter"; 

x = 24; // invalid

----------------------------

first.js

var g = 100; // global variable

function doTask() {
	var a = 10;
	if( g > a) {
		var b = 20;
		c = 30;
	}

	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);


JavaScript runs on JS engines

JS engines:

V8 ==> google --> chrome / nodejs

SpiderMonkey ==> FireFox / [ Acrobat ]

Chakra

Nashorn ==> Oracle ==> Java


JS engine internals: ==> Execution context ==> Global Context.png

================================

function add(x, y) {
	return x + y;
}

console.log(add(4,5)); // 9



function add(x, y) {
	console.log(x + y ); // 9
}


let res = add(4, 5); 

What is the value of "res" ? // undefined

=================

Semi-colon insertions ==> tokens, keywords, AST 

function add(x, y) {
	return
		x + y;
}

console.log(add(4,5)); // ? ==> undefined

============================================

JS stack, callback queue, Web Api, event loop

timed() and clicked() are callback functions:

console.log("Hello");

setInterval(function timed() {
	console.log("Timed!!!");
}, 100);

$("#btn").click(function clicked() {
	console.log("clicked!!!");
});

console.log("Bye!!!");

=========================================

In JavaScript functions are data types

var name = "Shyam";

var fn = function() {}; 

// anonymous function

setInterval(function () {
	console.log("Timed!!!");
}, 100);

==============================

OOP with JS

-------------

Object has state and behaviour

Account instance/object will have "balance" ==> state; credit() and debit() are behaviour/action/methods of Account


1) Object function to create a Object

var obj = new Object();

"new" keyword to create object

Object(); // calling a function which exectes on "Global Context"

new Object(); // create its own context [ it gets its own "this" pointer; won't take "this ==> window"]

obj.x = 10; //state
obj.y = 15; // state

obj.print = function() {
	console.log(this.x + "," + this.y);
}


obj.print(); // context is "obj"; within "print() "this" refers to "obj"

2) Function constructor pattern

function Person(id, name) {
	this.id = id;
	this.name = name;
}


var p1 = new Person(10, "Smitha");

var p2 = new Person(34, "Hema");

======================

2.1) adding methods to function constructor



function Person(id, name) {
	this.id = id; // state
	this.name = name; // state
}

// adding methods ==> behaviour
Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.getId = function() {
	return this.id;
}


var p1 = new Person(10, "Smitha");

var p2 = new Person(34, "Hema");

p2.getName();

p1.getName();


======================================

function add(x, y) {
	return x + y;
}

var add = new Function("x", "y", "return x + y"); // inherits from "Object"

==========================================


3) JSON ==> JavaScript Object Notation  {}

	==> generally used as a representation of data which will be a part of payload between client <==> server

	XML vs JSON

	// singleton
	var product = {
		"id": 1,
		"name" : "iPhone",
		"price" : 89000.00
	};

	key / instance variable / field ==> string
	value can be string, number, boolean, function, array, undefined, null, object


array of products:

	[	
    	{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    	{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    	{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    	{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      	{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
    ]

=====================================

* bind() method

var product = {
		"id": 1,
		"name" : "iPhone",
		"price" : 89000.00,
		"getName" : function() {
			return this.name;
		}
	};

	product.getName(); // iPhone


var ref = product.getName; // product context is not taken; hence refers to window when "this" is used

ref();  // this.name ==> window.name

var cref = product.getName.bind(product); // bind context also

cref(); // this ==> product


var person = {
	"name" : "Geetha"
}

var pref =  product.getName.bind(person);
pref(); // Geetha


================

function update(name) {
	this.name = name;
}

var product = {
		"id": 1,
		"name" : "iPhone",
		"price" : 89000.00,
		"getName" : function() {
			return this.name;
		}
};


var person = {
	"name" : "Geetha"
}

update.call(person, "Rita"); // changes person.name to "Rita" ==> context is "person"

update.call(product, "Pixel"); // context is "product" ==> within update -=> "this" refers to "product"

=========

If we use "use strict"; ==> concept of default going to "global context" will fail


===========================================================================================

JSON, function prototype, call / apply , bind 

=================================================================================
Functional style of programming ==> functions which are not tightly coupled to state of object

High Order function ==> HOF
* functions which accept other functions as arguments ==> all callbacks are implemented
* functions which return a function
* ==> treat functions as first class members just like primitive and object

var data = [4,5,7,8,2,55];

var products = [	
    	{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    	{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    	{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    	{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      	{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
  ]
for(var i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(var i = 0; i < data.length; i++) {
	alert(data[i]);
}

--
HOF:
function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}


forEach(data, console.log);
forEach(products, console.log);
forEach(data, alert);

==========================================

Commonly used HOF:
* filter
	to get a subset based on predicate function
* map
	to transform data
* reduce
	to get aggregate on data ==> sum(), avg(), max(), count() ==> single value from collection
* forEach

============================
 
HOF ==> functions returning a function ==> Closure

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

// closure is a concept where a returned function can access all the members of outer function

var gm = greeting("Good morning"); // gm has a refernce to "msg" and "greeting" funciton ==> closure
gm("Rahul"); 


greeting("Good morning")("Rahul"); // Currying

f(x)(y)(z);

=================================

Closure can be used in Memoize design pattern

Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

getProduct(4);
	==> REST API call to Spring Boot ==> MySQL database server ==> returned value ==> convert to JSON ==> return JSON

getProduct(5);
	==> REST API call to Spring Boot ==> MySQL database server ==> returned value ==> convert to JSON ==> return JSON

getProduct(4);
	==>  get from cache

=======================================

JavaScript version ==> ECMA ==> JS 5

ES2015 ==> ES 6 and ESNext 

https://caniuse.com/

ES 2015/ ES6 or ES Next ===> transpile / transcompile ==> ES 5 version

* Babel
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. 

* Tracuer

=================

ES2015/ ES 6 features:

1) Block level scope variables and constant [ let , const]

var g = 100; // global variable
const PI = 3.14159; 
function doTask() {
	var a = 10;
	if( g > a) {
		let b = 20; // scope is within the block
		c = 30;
	}

	console.log(g, a, b, c); // b is not visible
}

doTask();

====================================

2) Arrow functions

let add = (x, y) => {
	return x + y;
}

or

let add = (x, y) => x + y;

 var evens = filter(data, function (d) { return d % 2 === 0; });

 var evens = filter(data, d => d % 2 === 0);
 

Default values:

let add = (x = 0, y = 0, z = 0) => x + y + z;

add();
add(10);
add(4,5);
add(5,2,1);

==========================

3) Destructuring and spread operator [ ... ]

3.1) array

var colors = ["red","green","blue","orange"];

ES5 way:
var r = colors[0];
var g = colors[1];

ES6 way:

var [r, g, ...other] = colors;

console.log(r); // red
console.log(other); // ["blue","orange"]


3.2) object
var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

ES 5 way:
console.log(p.name);

var {name, price} = p;
console.log(name); // iPhone

========================

4) Clone

var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

var ref = p; // reference

ref.name = "OnePlus";

p.name ==> "OnePlus";

Clone

var copy = {...p};
copy.name = "Samsung";

var data = [6,8,1];

var copyelem = [...data]; // copy

===================================================

5) Promise API
	A promise represents the eventual result of an asynchronous operation. ==> Future

	Synchronous function:

	var res = doTask(); // blocking code ==> execute on stack
	console.log(res); // line executes only after doTask() complete

	If doTask() was returning a eventual result [resolved / rejected] ==> Promise

	doTask().then(
		(data) => code for resolved,
		(err) => code for rejected
	)

	console.log("done"); // doesn't wait for promise to complete


fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(data => console.log(data))
	.catch( err => console.log(err));

=====================	

Promise.all() ==> use case ==> Aggregator application ==> Make My Trip ==> Promise ==> Hotel 
Promise ==> Airline
Result which has hotel and air fares

Promise.any() ==> use case ==> multiple servers have same data [ CDN ] ==> interested in first response

=============================


6) async and await ==> easy way to use Promise API

==========

7) Generator
	are functions which can return multiple values 

	function* mySaga() {
		console.log("task 1");
		console.log("task 2");

		yield "first output";  
		
		console.log("task 3");
		console.log("task 4");
		console.log("task 5");

		yield 100; // return 

		console.log("task 6");

		yield "bye!!"
	}

	var iter = mySaga();
	iter.next(); {done:false, value: "first output"}
	...
	iter.next();  {done:false, value: 100}
	...
	iter.next();  {done:false, value: "bye"}

	iter.next(); { done: true, value : undefined}

============

8) Class and ES 6 Module ==> cover along with Webpack

9) template literal ==> string

var name = "Harry";
var program = "React";

var msg = `<div class="card">

Hello ${name}
Welcome to ${program}
</div>
`;

Traditional ES 5 way:

msg = "<div class='card'> Hello" + name + "Welcome to " + "program" + "</div>"

=================================


ES 5 Module System using IIFE
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

(function() { 
	// code
})();


let productModule = (function() {
	var data = 100; // private within the module
	function doTask() {
		console.log(data);
		someTask();
	}

	function someTask() { // private
		console.log("some task!!!");
	}
	return {
		doTask
	}
})();

productModule.doTask(); // 100

productModule.data; // not visible
productModule.someTask(); // not visible


let orderModule =  (function() {
	var data = 999; // private within the module
	function print() {
		console.log(data);
	}
	function doTask() {
	}
	return {
		printInfo : print,
		doTask 
	}
)();

orderModule.printInfo(); // 999
orderModule.doTask();


=============================

DOM ==> Document Object Model ==> language independent tree of objects created from XML / HTML


document is the root object

1) access dom element using ID
<div id="tmpl-header"></div>

document.getElementById("tmpl-header");

document.getElementById("tmpl-header").remove()

2) access dom element by tag name

<section></section>

document.getElementsByTagName("section")


3) access dom element by class name

document.querySelectorAll("classname")
document.querySelector(".hero-item-image")

querySelector and querySelectorAll can be used to get DOM elements by ID, tagName, class name, attribute


============================================













