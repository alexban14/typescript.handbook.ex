// Objects - the fundamental way of passing data around in JS
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// can be used an interface
interface PersonI {
  name: string;
  age?: number; // optional properties
}
// or a type Alias
type Person = {
  name: string;
  age?: number;
  readonly id: number; // properties can be marked as readonly
}

function greet1(person: Person) {
  return "Hello " + person.name;
}

// extending types
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}


// intersection types
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;


// generic object types
type Box<Type> = {
  contents: Type;
}

let boxString: Box<string> = { contents: `I'm a square box` };

// generic types are reusable meaning, "Type" can be any type
type Apple = {
  color: string;
  flavor: string;
}

type AppleBox = Box<Apple>;

let appleBox: AppleBox = {
  contents: {
    color: "red",
    flavor: "sweet"
  }
}


// the Array Type
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

let names: StringArray = ["Alice", "Bob", "Eve"];
let numbers: NumberArray = [1, 2, 3];
let people: ObjectWithNameArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Eve" }];

names.push("Eve");
names.splice(1, 1);

// the ReadonlyArray Type
// - describes an array whose elements cannot be changed
// - it refers only to a type, not a value => cannot be used to instantiate an array 
type ReadonlyStringArray = ReadonlyArray<string>;
type ReadonlyNumberArray = ReadonlyArray<number>;
type ReadonlyObjectWithNameArray = ReadonlyArray<{ name: string }>;

let readonlyNames: ReadonlyStringArray = ["Alice", "Bob", "Eve"];
let readonlyNumbers: ReadonlyNumberArray = [1, 2, 3];
let readonlyPeople: ReadonlyObjectWithNameArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Eve" }];


// Tuple Types - another sort of array type that can only contain a certain number of elements
type TupleEx = [string, number, boolean];

// can be read only
function doSomething(pair: readonly [string, number]) {
  // ...
}