// let and const - Block scope
function a(){
    const age = 17;
    age++;
    if(age > 17) console.log("You can vote");
    else console.log("You cannot vote");
}

//const assignment pointing to the object means it is pointing to a reference variable & restricts the reference to be changed and not the value. 
//In below example const is referring to object and not the value in it. Hence age can be changed.
function b(){
    const person = {
      name: "Priyanka",
      age: 17
    };
    person.age = person.age + 1;
    if(person.age > 17) console.log("You can vote");
    else console.log("You cannot vote");
}

b();

//Hoisting in javascript for let & const doesn't work as same as for var.
//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script). For example var y is defined after assigning the value, it won't work with let/const
let x;
x=25;
// let x;
console.log(x);

y=80;
console.log(y);
var y;

