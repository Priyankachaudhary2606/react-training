//Destructuring objects
let obj = {
    name: "Max",
    age: 27,
    greet: ()=>console.log("Hello there")
};

let {a, b, greet} = obj;
console.log(a);
greet();
let {name, age, greet: hello} = obj;
console.log(age);
hello();

