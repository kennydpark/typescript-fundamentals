class Department {
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

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
    console.log('number of employees: ', this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

// overriding methods/properties of base class
  addEmployee(name: string) {
    if (name === 'Kenny') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }
}

const department = new Department('dx', 'Department');
console.log(department)
department.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// accountingCopy.describe();

department.addEmployee('Employee1');
department.addEmployee('Employee2');
department.printEmployeeInformation();



// - alternative way, but not recommended for uniformity in method
// - and doesn't work when 'private' keyword is added in the class
// - otherwise, 'public' enables the access, which is by default
// accounting.employees[2] = 'Lenny';
// accounting.printEmployeeInformation();

const it = new ITDepartment('d1', ['Kenny']);
it.addEmployee('Kenny');
it.addEmployee('Jenny');
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
accounting.addEmployee('Kenny');
accounting.addEmployee('Benny');
accounting.printEmployeeInformation();
console.log(accounting);
