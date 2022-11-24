// ... this is rest/spread operator based on the use of it
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

//Rest Parameter use - here it takes list of number and treats them as an array
var fn = (...toAdd)=> {
    sum=0
    for(i=0; i<toAdd.length; i++){
        sum +=toAdd[i];
    }
    return sum;
}
//trying to send indefinite number of values to add
console.log(fn(100, 10, 12));
//trying to send indefinite number of mixed values to add
console.log(fn(100, 10, "12"));

//...spread parameter use - here it takes an array and spread it in list of numbers
let numbers = [6,7,8,9,10,1,2];
console.log(Math.max(numbers));
console.log(...numbers);
console.log(Math.max(...numbers));