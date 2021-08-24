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







