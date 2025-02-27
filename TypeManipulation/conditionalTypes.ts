// Conditional Types - a way to create types that depend on other types

// pseudo:   SomeType extends OtherType ? TrueType : FalseType;

type GetProperty<T, K extends keyof T> = K extends string ? T[K] : never;
// explanation: if K is a string, return T[K], else return never

// real world example:

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
// we have multiple overloads that can be refactored using conditional types
function createLabelOverload(id: number): IdLabel;
function createLabelOverload(name: string): NameLabel;
function createLabelOverload(nameOrId: string | number): IdLabel | NameLabel;
function createLabelOverload(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// do this instead:
type NameOrId <T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel('typescript');

let b = createLabel(2.8);

let c = createLabel(Math.random() ? 'hello' : 42);