abstract class Department {
  // private readonly id: string
  // public name: string;
  protected employees: string[] = [];
  static fiscal_year = 2024;

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    //this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const accounting = new Department("B512342", "Accounting");

// accounting.addEmployee("Alun");
// accounting.addEmployee("Sinead");

// accounting.describe();
// accounting.printEmployeeInformation();

// accounting.employees[2] = "Anna";

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log(`IT Department (${this.id})`);
  }
}

const it = new ITDepartment("d1", ["Alun"]);
it.addEmployee("Alun");
it.addEmployee("Sinead");
it.describe();
it.printEmployeeInformation();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department (${this.id})`);
  }

  addEmployee(name: string) {
    if (name === "Alun") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.describe();
accounting.addReport("NEW REPORT ON TYPESCRIPT");
accounting.addReport("A SECOND REPORT ON TYPESCRIPT (II)");
accounting.addEmployee("Alun");
accounting.addEmployee("Francis");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "The third report on TYPESCRIPT (III)";

accounting.printReports();
console.log(accounting);

const employee1 = Department.createEmployee("Kevin");
console.log(employee1);
console.log("Fiscal Year: ", Department.fiscal_year);
