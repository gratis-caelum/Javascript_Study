// String
const str = "hello world";
console.log(str.length); // 11
console.log(str.charAt(1)); // "e"
console.log(str.indexOf("o")); // 4
console.log(str.slice(0, 5)); // "hello"
console.log(str.toUpperCase()); // "HELLO WORLD"

// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[2]); // 3
console.log(arr.slice(0, 3)); // [1, 2, 3]
console.log(arr.map(x => x * 2)); // [2, 4, 6, 8, 10]
console.log(arr.reduce((acc, cur) => acc + cur)); // 15

// Object
const obj = {
    name : "John",
    age : 30
};

console.log(obj.name); // "John"
console.log(Object.keys(obj)); // ["name", "age"]
console.log(Object.values(obj)); // ["John", 30]
console.log(Object.entries(obj)); // ["name", "John"], ["age", 30]
console.log(JSON.stringify(obj)); // '{"name" : "John", "age" : 30}'

// Number
const num = 3.141592;

console.log(num.toFixed(2)); // 3.14
console.log(Math.floor(num)); // 3
console.log(Math.ceil(num)); // 4
console.log(Math.round(num)); // 3
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.random()); // 임의의 0 이상 1 미만의 숫자

// map() method
const people = [
    { name : "Alice", age : 25 },
    { name : "Bob", age : 30 },
    { name : "Charlie", age : 35 }
];

const names = people.map(person => person.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// Callback function
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);