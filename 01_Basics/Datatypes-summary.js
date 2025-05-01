// Primtive

// 7 types of primitive data types
// These data types are used call by value there value get copied from there original doesn't change.
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 101;  // number
const scoreDec = 100.3; // number

const isLoggedIn = false; // boolean
const outsideTemp = null; // Object
let userEmail; // undefined

const id = Symbol('123'); //symbol
const secondId = Symbol('123'); // symbol

//console.log(id === secondId);
const BigNumber = 1234567890123456789012345678901234567890n;


// reference type (non primitive)
// Array, objects, functions

const heroes = ['Shaktiman', 'Dhruv', 'Doga', 'Naagraaj', 'Bankelal', 'Chacha Chaudhary']; // Object
let myObj = {
    name: "Durgesh",
    occupation: 'Software Engineer',
    age: 39,
    ismarried: true,
    hobbies: ['Cricket', 'Reading', 'Travelling'],
    address: {
        city: 'Delhi',
        state: 'Delhi',
        country: 'India'
    },
} // Object

const myFunction = function() {
    console.log('Hello World');
} // Function Object

//console.log(typeof myFunction);

// ------------------------------------------------------------------

// Stack (primitive) and Heap (non-primitive)

let ourSuperHeroes = "Shaktimaan";
let anotherName = ourSuperHeroes;
anotherName = "Pandit Gangadher Omkarnath Shastri";

console.log(ourSuperHeroes);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@axb"
}

let userTwo = userOne;

userTwo.email = "Durgesh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);