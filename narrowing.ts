// Narrowing - when we want to check the type of a value

// TypeGuards
// typeof
function printAll(strs: string | string[] | null) {
	if (typeof strs === "object" && strs !== null) {
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === "string") {
		console.log(strs);
	} else {
		// do nothing
	}
}

// in - operator for determining if an object or its prototype chain has a property with the given name
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
	if ("swim" in animal) {
		return animal.swim();
	}

	return animal.fly();
}

// instanceof
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}


