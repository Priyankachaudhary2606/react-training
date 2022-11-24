//Set default values to function parameters using ES6
var fn = (x, y=9) => x==y;

console.log(fn(9));
console.log(fn(8));
console.log(fn(6,7));
console.log(fn(17,17));
console.log("Next-------");


var fn2 = (x, y=10/2) =>{
    console.log(x);
    console.log(y);
    return x==y;
}
console.log(fn2());
console.log(fn2(5));

//default intialization
let name = "Priyanka";
let age = 27;

let obj = {
    name,
    age
};
console.log(obj);