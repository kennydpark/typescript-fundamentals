class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id}: ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
console.log(accounting)
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// accountingCopy.describe();

accounting.addEmployee('Kenny');
accounting.addEmployee('Jenny');
accounting.printEmployeeInformation();

// - alternative way, but not recommended for uniformity in method
// - and doesn't work when 'private' keyword is added in the class
// - otherwise, 'public' enables the access, which is by default
// accounting.employees[2] = 'Lenny';
// accounting.printEmployeeInformation();
