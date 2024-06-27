import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();

console.log("My name is " + sillyName);
//OR
console.log(`My name is ${sillyName}`);

// Challenge - Superheroes name print
console.log("I am " + randomSuperhero());
