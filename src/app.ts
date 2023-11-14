class Department {
  // private readonly id: string
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    //this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("B512342", "Accounting");

accounting.addEmployee("Alun");
accounting.addEmployee("Sinead");

accounting.describe();
accounting.printEmployeeInformation();

// accounting.employees[2] = "Anna";
