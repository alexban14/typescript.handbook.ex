// JS Modules - since ES2015 (ES6), any file containing a top level `import` or `export` is considered a module
// 			  - a module is a unit of code that can be imported by another file
// ! - A file without any top-level import / export declarations is treated as script
// ! - whose contents are available in the global scope (to modules as well)\


// Modules in TS

// declaring a main export
export default function hello() {
	console.log("Hello");
}

// import hello from "./hello";


// we can have more than one export by omitting the `default` keyword
export function hi() {
	console.log("Hi");
}
export function bye() {
	console.log("Bye");
}

// import { hi, bye } from "./hello";