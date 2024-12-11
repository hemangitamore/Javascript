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
/*console.log("C ",myArr);
console.log(Array.from("Hemangi"));
console.log(Array.from({name:"Hemangi"}));*/
let s1=100;
let s2=190;
let s3=200;

//console.log(Array.of(s1,s2,s3));

const user={
    username:"Hemangi",
    price:999,

    welcomemesg: function(){
         console.log(`${this.username},welcome to the channel`);
         console.log(this);
         
         
    }
}

user.welcomemesg();
user.username="sam";
user.welcomemesg();
console.log(this);

//browser global object is window and in the node environment it is empty object


//const addTwoNum= (num1,num2)=> (num1+num2);
    

//console.log(addTwoNum(8,9));
//to return the objecct
const addTwoNum= (num1,num2)=> ({username:"Hemangi"});
    
console.log(addTwoNum(8,9));

//Immediate Invoke Function Expression
//some time problem ocure due to global pollution beacause of the global variable ,declaration this pollution occure to avoid that we use IIFE
(function chai(params) {
    console.log("DB CONNECTED");
    
})(); //named ITFE

//to execute the next IIFE we have to end the previous function

((name)=>{
    console.log( `DB CONNECTED TWO ${name} `);
    
})('Hemangi'); //unnamed IIFE








