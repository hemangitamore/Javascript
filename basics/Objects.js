//singleton:-e can make the singleton object with the help of constructor
//but we can make multiple instances with the help of literals
//object literals
const mySym=Symbol("Key1");
const JsUser={
    name:"Hemangi",
    [mySym]:"MyKey1",
    age:24,
    location:"Boisar",
    email:"hemangitamore.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//to acess the properties of the objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

//we can acces the properties of the object with . notation
//Object.freeze(JsUser);
JsUser.greeting=function(){
    console.log("Hello");
    
}
console.log(JsUser.greeting());

//const tinedrUser=new Object() //singletone object

//non singletonobject
//const tinedrUser={}

//Array of objects
const tinedrUser=[
    {
        userName:"Hitesh",
        lastName:"Choudary"
    },
    
    {
        userName:"Hitesh1",
        lastName:"Choudary2"
    }
]
 
console.log(tinedrUser[1].lastName);

//object destructuring
const course={
    userName:"Hitesh"
}

const {userName: name}=course;
console.log(name);

//JSON
/*{
    "name":"Hemangi",
   " lastName":"Tamore"
}*/





