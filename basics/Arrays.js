//arrays
//javascript arrays are resizable and we can store any type of elements
//
const myArr=[0,1,2,3,4];
console.log(myArr.push(9));
console.log(myArr);
myArr.unshift(10);
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
const newArr=myArr.join();
console.log(newArr);
//slice,splice
console.log("A ",myArr);
const myN1=myArr.slice(1,3)
console.log(myN1);
console.log("B ",myArr);
console.log(myN1);

const myN2=myArr.splice(1,3);
console.log("C ",myArr);
console.log(Array.from("Hemangi"));
console.log(Array.from({name:"Hemangi"}));
let s1=100;
let s2=190;
let s3=200;

console.log(Array.of(s1,s2,s3));














