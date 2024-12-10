//function is the package which storrs the multiple line of code and use that function number of times
function loggedIn(username){
    if(!username){
        console.log("Please enter username");
        return
        
    }
    return `${username} jsut logged in`
}
//console.log(loggedIn(""));

//rest operator
function calculateCartPrice(...num1){
    return num1;
    
}
console.log(calculateCartPrice(2,6));
 
