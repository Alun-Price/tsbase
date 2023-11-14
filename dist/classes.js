"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscal_year = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
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
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
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
    addEmployee(name) {
        if (name === "Alun") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
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
