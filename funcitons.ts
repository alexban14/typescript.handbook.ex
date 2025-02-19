// call signatures
type DescribableFunction = {
	description: string;
	(someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
	console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
	return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

// constructor signatures
type SomeObject = {
	someProp: string;
	(s: string): string;
}
type SomeConstructor = {
	new(s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
	return new ctor("hello");
}