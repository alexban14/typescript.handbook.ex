// Abstract Classes & Members
// "abstract class" - is a class that contains at least one abstract method or field
// "abstract method or field" - is a class member that is declared without an implementation
//                            - the method or field must be implemented in a derived class
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log(`Hello, ${this.getName()}`);
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();


// Abstract Construct Signatures - we might want to accept some class constructor function
//  	that produces an instance of a class which derives from some abstract class

// we might be tempted to write this:
function greetBad(ctor: typeof Base) {
  const person = new ctor(); // "cannot create an instance of an abstract class"
  person.printName();
}

// we need a function as a parameter that accepts something with a construct signature
function greetOk(ctor: new () => Base) {
  const person = new ctor();
  person.printName();
}

greetOk(Derived);
greetOk(Base); // Cannot assign an abstract constructor type to a non-abstract constructor type