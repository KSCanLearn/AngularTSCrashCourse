export interface User {
	name: string;
	age?: number;
	id?: number;
	email: string;
}

let user: User = { name: "h", email: "asd" };

// destructing
let { email, name }: User = { name: "h", email: "asd" };
console.log("🚀 ~ email, name:", email, name)

export interface Login {
	Login(): User;
}

let users: User[] = [
	{ email: "email", name: "asd" },
	{ email: "email", name: "asd" },
];
