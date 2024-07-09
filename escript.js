// funciones string
let saludo = "hola mundo";
let saludo2 = saludo.toUpperCase();
console.log(saludo2); // "hola mundo"

let saludo1 = "hola mundo";
let saludo11 = saludo1.slice(0, 5);
console.log (saludo11); // "hola"


let saludo3 = "hello world";
let saludo4 = saludo3.includes("hello");
console.log(saludo4); // true

//funciones numericos

let num1 = 123.456;
let fixedNum = num1.toFixed(2);
console.log(fixedNum); // "123.46"

let num2 = 123;
let strNum = num2.toString();
console.log(strNum); // "123"

let value = "abc";
let noesnumero = isNaN(value);
console.log(noesnumero); // true


// //funciones boolean

let bool = true;
let strBool = bool.toString();
console.log(strBool); // "true"


let bool1 = new Boolean(false);
let valor = bool1.valueOf();
console.log(valor); // false


let str = "hello";
let boolValue = Boolean(str);
console.log(boolValue); // true


// //funciones objetos

let objeto = { a: 1, b: 2, c: 3 };
let keys = Object.keys(objeto);
console.log(keys); // ["a", "b", "c"]

let obj = { a: 1, b: 2, c: 3 };
let values1 = Object.values(obj);
console.log(values1); // [1, 2, 3]

let obj1 = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj1);
console.log(entries); // [["a", 1], ["b", 2], ["c", 3]]


// //funciones array

let array = [1, 2, 3];
array.push(6);
console.log(array); // [1, 2, 3, 4]

let arr = [1, 2, 3];
let squaredArr = arr.map(x => x * x);
console.log(squaredArr); // [1, 4, 9]

let arr1 = [1, 2, 3, 4, 5];
let evenArr = arr1.filter(x => x % 2 === 0);
console.log(evenArr); // [2, 4]
