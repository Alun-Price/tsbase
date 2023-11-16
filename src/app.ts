// const names = ["Alun", "Sinead"];

// const emptyArray = [];

// const emptyArray2: Array = [];

// const emptyArray3: Array<string> = []; // same as string[]
// const emptyArray4: Array<string | number> = [];
// const emptyArray5: Array<any> = [];

// const names: Array<string> = [];
// // names[0].split(' '); // allows string methods

// // Promises
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split("");
// });

function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Alun", hobbies: ["Sports"] }, { age: 50 });
console.log(mergedObj.age); // 50
console.log(mergedObj.name); // Alun
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Alun" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Alun");
// textStorage.addItem("Sinead");
// textStorage.removeItem("Sinead");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1000);
// numberStorage.addItem(345);
// numberStorage.removeItem(345);
// console.log(numberStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Alun", "Sinead"];
// names.push['Anna']
// names.pop();
