abstract class Department {
  // 'statc' - separated from instances and not accessible via 'this'
  static fiscalYear = 2022;
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
    // console.log(`Department: ${this.id}: ${this.name}`)

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

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

// getter must return something
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
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
    this.lastReport = text;
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

const employee1 = Department.createEmployee('Kenny');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Kenny']);



it.addEmployee('Kenny');
it.addEmployee('Jenny');
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
accounting.printReports();
accounting.addEmployee('Kenny');
accounting.addEmployee('Benny');
accounting.printEmployeeInformation();
console.log(accounting);
console.log(accounting.mostRecentReport);
accounting.describe();
