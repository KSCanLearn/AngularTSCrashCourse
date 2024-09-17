import { Login, User } from "./interfaces";

class Employee {
	id: number;
	name!: string;
	address!: string;
	#hell!: string;

	constructor(id: number, name: string, address: string) {
		this.id = id;
		this.name = name;
		this.address = address;
	}

	getNameAndAddress(): string {
		return `${this.name} at ${this.address}`;
	}

	static getEmployeeCount = () => 50;

	Login(): User {
        return {email: "", name: ""}
    }
}

let p = new Employee(1, "John", "");
Employee.getEmployeeCount();

