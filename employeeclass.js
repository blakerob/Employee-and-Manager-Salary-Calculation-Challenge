U92725213

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log("Name: " + this.name);
        console.log("Salary: \$" + this.salary);
    }

    annualSalary() {
        return this.salary * 12;
    }
}

