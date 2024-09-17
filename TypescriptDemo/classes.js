"use strict";
var _Employee_hell;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_hell.set(this, void 0);
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameAndAddress() {
        return `${this.name} at ${this.address}`;
    }
    Login() {
        return { email: "", name: "" };
    }
}
_Employee_hell = new WeakMap();
Employee.getEmployeeCount = () => 50;
let p = new Employee(1, "John", "");
Employee.getEmployeeCount();
