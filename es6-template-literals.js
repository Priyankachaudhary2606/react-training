//Template literals allows to define text inside a variable. Text can be combination of html, string, multi-line string, variables, expression
//use back tick

let firstName = "Priyanka";
let age = 27;

let template = `
Hello, my name is "${firstName + "!!!"}".
My age is ${age}.
I am ${(age<18)?"not allowed":"allowed"} to vote
`;

console.log(template);

//backslash can be used to print complete variable text as it is