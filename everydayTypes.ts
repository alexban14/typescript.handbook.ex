// Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// type aliases can be used to give a name to any type at all
type ID = number | string;


// Interfaces - another way of typing an object (unlike `type`, it is extendable)

interface PointI {
  x: number;
  y: number;
}

interface ShapeInSpace extends PointI {
  x: number;
  y: number;
  z: number;
}

type ShapeInSpace2 =  Point & {
  z: number;
}

let box: ShapeInSpace = { x: 100, y: 200, z: 300 };
 

// TypeAssertions - when we want typescript to know about the type of a value it can't infer
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


// Literal Types - specify the exact value a variable can take
type SquareSize = "100x100" | "500x500" | "1000x1000";

let mySquare: SquareSize;
mySquare = "100x100";

// error
mySquare = "200x200";

// Literal Inference
declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
// err
let req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// solutions
req = { url: "https://example.com", method: "GET" as "GET" }; // solution 1
handleRequest(req.url, req.method as "GET") // solution 2


// Enums - feature on top of JS that allows you to define a set of named constants
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}

enum UserResponse {
  No = 0,
  Yes = 1
}

// Heterogenous Enums
enum Answer {
  N, // 0
  Y = "YES"
}

//  keyof typeof to get a Type that represents all Enum keys as strings.
type DirectionKeys = keyof typeof Direction; // "Up" | "Down" | "Left" | "Right"

// an object with as const could suffice
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const;