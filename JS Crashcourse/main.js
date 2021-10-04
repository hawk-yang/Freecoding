alert("Hello");
console.log("Yuh yeet");
console.error("example error");
console.warn("example warning");

//let, const
let age = 30;
console.log("your age is", age);
age = 16
console.log("your age is now", age);

const age2 = 32
console.log("your age2 is", age2);

//String, Numbers, Boolean, null, undefined
const firstName = "John";
age = 30;
const rating = 3.7;
const isCool = true;
const x = null;
const y = undefined;
let z;


console.log(typeof firstName);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
/*
This will return 'object' but that's bogus cause in the beginning of JS, for a given "type tag" input,
the return value is given. They mapped null to the NULL pointer (0x00 in most platforms) originally 
but that got interpeted as '0' for some reasn and so it became "typeof null === 'object';"
*/
console.log(typeof y);
console.log(typeof z);

//Concatenation
console.log("My name is " + firstName + " and my age is " + age)
//Template String
const hello = `My name is ${firstName} and my age is ${age}`;
console.log(hello);

//String properties
const s = "Hello World I am Bob";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(" "));


//Arrays 
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits);

fruits[3] = 'grapes';
console.log(fruits[1]);

fruits.push("mangos");
fruits.unshift("strawberries");
console.log(fruits, "is current");

fruits.pop();

console.log(Array.isArray(fruits));
console.log(Array.isArray("oranges"));
console.log(fruits.indexOf("oranges"));

console.log(fruits);


//Note though, you tecnically can't delete an array...

//Object literals
const person ={
    firstName1: "John",
    lastName1: "Doe",
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: "50 Main Street",
        city: "Boston",
        state: "MASSACHUSETTS"
    }
}

console.log(person)
console.log(person.age)
console.log(person.hobbies[1])


const { firstName1, lastName1, address: {city} } = person;
console.log(firstName1, lastName1, city);

person.email = "john@doe.com"
console.log(person)


//Array of objects

const todos = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 1,
        text: "Change the sheets",
        isCompleted: true
    },
];
