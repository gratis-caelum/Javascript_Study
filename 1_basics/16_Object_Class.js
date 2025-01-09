class Car {
    constructor(model, make, color, year) {
        this.model = model;
        this.make = make;
        this.color = color;
        this.year = year;
    }

    drive() {
        console.log("The car is driving");
    }

    stop() {
        console.log("The car is stopping");
    }
}

const myCar = new Car("Sonata", "Hyundai", "White", "2022");
console.log(myCar.model); // "Sonata"
myCar.drive(); // "The car is driving"
myCar.stop(); // "The car is stopping"

// Object

// Object create
let person = {
    name : "John",
    age : 30,
    isStudent : false
};

// Object 속성 접근
console.log(person.name); // "John"
console.log(person["age"]); // 30

// Object 속성 변경
person.age = 35;
person["isStudent"] = true;

// Object 속성 추가
person.city = "Seoul";

// Object 속성 삭제
delete person.isStudent;

// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`안녕하세요. ${this.name}입니다. ${this.age}살입니다.`);
    }
}

const person1 = new Person("홍길동", 20);
person1.greeting();

// Object 생성 방법

// Object Literal
const person = {
    name : "John",
    age : 30,
    gender : "male";
    sayHello : function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// constructor function
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("John", 30, "male");

// Class 사용 생성
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("John", 30, "male");
