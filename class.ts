// "this" at runtime in classes 
// 		- JavaScript handling of this is at least unusual
// 		- the value of this inside a function depends on how function was called 
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}

const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
 
// Prints "obj", not "MyClass"
console.log(obj.getName());
// explanation: because the function was called through the obj reference, its value of this was obj rather than the class instance

// fix: use arrow functions, for functions that will often be called in way that loses it "this" context
class MyClassFixed {
  name = "MyClass";
  getName = () => {
	return this.name
  };
}

const cFixed = new MyClassFixed();
const objFixed = {
  name: "obj",
  getName: cFixed.getName,
};
 
// Prints "MyClass", not "obj"
console.log(objFixed.getName());

// ! trade offs of using "this" keyword with arrow functions:
// "+" guaranteed to be correct at runtime, even for code not checked with TypeScript
// "-" it will use more memory, each class instance will have its own copy of each function defined this way
// "-" "super.getName" in a derived class won't work anymore, because there is no entry in the prototype chain to fetch the base class method from


// "this" parameters - in a method or function definition an initial parameter named this has a special meaning in TS
function fn(this: MyClass, x: number) {
  /* ... */
}

// JavaScript output
// function fn(x) {
//   /* ... */
// }

// TS checks that calling a function with a "this" parameter is done so with a correct context
// the "this" parameter can be added to method definitions to statically enforce that the method is called correctly
class MyClassBetter {
  name = "MyClass";
  getName(this: MyClassBetter) {
	return this.name;
  }
}

const cBetter = new MyClassBetter();
const objBetter = {
  name: "obj",
  getName: cBetter.getName,
};
 
// Prints "MyClass", not "obj"
console.log(objBetter.getName());
// ! opposite trade off of the arrow function approach
// "-" JS callers can still be using the class method incorrectly 
// "+" only one function per class definition gets allocated (rather then one per class instance)
// "+" base class methods can be called via "super"