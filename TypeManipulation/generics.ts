// Generics Types - way of creating reusable types that can be used in any context
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;


// Generic Classes - another way of creating reusable types that can be used in any context
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;

myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";

stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


// Generic Constraints - specify a constraint that a type must satisfy
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
	console.log(arg.length);

	if ('value' in arg) {
		console.log(arg.value);
	}

	console.log(arg);
	return arg;
}

loggingIdentity({ length: 10, value: 3 });
loggingIdentity({ length: 9});

// Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

getProperty({ x: 1, y: 2 }, "x");
getProperty({ x: 1, y: 2 }, "z");


// Class Types in Generics 
// -  creating factories in Typescript using generics 
//    is necessary to refer to class types by their constructor functions
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string = 'Mikle';
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  numLegs: number = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
  numLegs: number = 4;
}

/**
 * Creates an instance of a class that extends the Animal class.
 * @param c - The constructor function of the class to instantiate.
 * @returns An instance of the specified class.
 */
function createInstance<A extends Animal>(classType: new () => A): A {
  return new classType();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;


// Generic Parameters Defaults
// -  by declaring a default for a generic type parameter
//    we make it optional to specify the corresponding type argument
declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
 
const div = create();
 
const p = create(new HTMLParagraphElement());