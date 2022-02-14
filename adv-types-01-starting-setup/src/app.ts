type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Kenny',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;
