// keyof operator - returns a union of the keys of the type

type User = {
	name: string;
	age: number;
};

type UserKeys = keyof User; // "name" | "age"