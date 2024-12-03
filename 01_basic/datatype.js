//javascript has 8 datatypes;
/*1)string
2)Number
3)Bigint
4)boolean
5)undefined
6)null
7)symbol
8)object */

//number:
let length=16;
let weigth=7.5;
console.log("area:",length*weigth)

//string
let name="krrish"
let address="xyz"
console.log(name+address)

//boolean
let x=true;
let y=false;
console.log(y);

//object
const cars=["mercides","volvo","mahindra","bmw","rolls royce"]
console.log(cars[2])

// some extra concept
let b = 16 + "Volvo";
console.log(b)//When adding a number and a string, JavaScript will treat the number as a string.


let num_string = 16 + 4 + "Volvo";
console.log(num_string) 
// when we goes to left to right number are add first then add with string

let num_string1 = "Volvo" + 16 + 4;
console.log(num_string1)
// when we goes to left to right when first come string then add one by one


//javascript is dynamic type
let m;       // Now m is undefined
m = 5;       // Now m is a Number
m= "John"; 
console.log(m) // Now m is a String
//always print last diclaration variable

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
console.log(answer3)


/*Most programming languages have many number types:

Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always one type:
double (64-bit floating point).
*/

//bigint example
let num = BigInt("123456789012345678901234567890");
console.log(num)

let  s= 5;
let n= 5;
let p= 6;
console.log((s == n))      // Returns true
console.log((n== p))       // Returns false

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName)