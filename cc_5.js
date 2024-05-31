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

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    annualSalary() {
        let annualSalary = super.annualSalary();
        let bonus = annualSalary * 0.15;
        console.log("Bonus: \$" + bonus);
        return annualSalary + bonus;
    }
}

let manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
console.log("Annual Salary: \$" + manager1.annualSalary());

let manager2 = new Manager('Debbie Little', 7205, 'Finance');
console.log("Annual Salary: \$" + manager2.annualSalary());