import "./style.css";

import _ from 'lodash';


import Person from './Person';

import {add, sub} from './math';


let p1 = new Person(42,"Karthik");

console.log("Hello World!!!");

console.log(p1.getName());


console.log(add(4, 5));
console.log(sub(41, 5));
let names = ["Raj","Rani", "Geetha", "Danny"];

console.log(_.join(names));
