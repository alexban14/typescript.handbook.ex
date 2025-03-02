// Class Expressions - similar to class declarations, but the difference is that
// 						they do not need a name
//  					they are not hoisted, and cannot be used before they are defined
//  					they are also not available in the global scope
const classExp = class<Type> {
	content: Type;
	constructor(content: Type) {
		this.content = content;
	}
}

const fromCExp = new classExp<string>("hello");