"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Alun", hobbies: ["Sports"] }, { age: 50 });
console.log(mergedObj.age);
console.log(mergedObj.name);
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Alun" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Alun");
textStorage.addItem("Sinead");
textStorage.removeItem("Sinead");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1000);
numberStorage.addItem(345);
numberStorage.removeItem(345);
console.log(numberStorage.getItems());
