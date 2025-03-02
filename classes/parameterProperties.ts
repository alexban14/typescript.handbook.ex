// TS offers special syntax for turning constructor => are called "parameter properties"
// 		- can be created by prefixing a constructor argument with an access modifier
// 		- options: `public`, `private`, `protected`, `readonly`
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const paramA = new Params(1, 2, 3);
console.log(paramA.x);