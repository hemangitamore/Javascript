const month=3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
        
    case 3:
        console.log("March");
        break;
        

    default:
        console.log("Default case match");
        
        break;
}

//falsy valu
//false,NaN,null,undefined,0,-0,BigInt,""

//Nullish coalescing
//check the null value
//Ternairy Operator
const price=100;
price <=80? console.log("less than amd equal to 80"): console.log("not less than");

//for of for map,array
const arr=[1,2,3,4];
for(const i of arr){
    console.log(i);
    
}

//Map is object which stors the key value pair
const map=new Map();
map.set('IN',"India");
map.set('USA',"United states of America");
console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
    
}

//for in for object,array
const myObj={
    game1:'NFS',
    game2:'spiderman'
}

for(const i in myObj){
    console.log(myObj[i]);
    
}

const arr1=["js","ruby","java"];
arr1.forEach(function(val){
    console.log(val);
    
});

arr1.forEach((item)=>{
    console.log(item);
    
})

//filter
const myArr1=[1,2,3,4,5,6];
const newNums=myArr1.filter((num)=>{
   return num>4
})
console.log(newNums);

//map to do some operation on array

//reduce return single value

