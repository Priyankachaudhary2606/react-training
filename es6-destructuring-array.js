//Destructuring in ES6

let num = [4, 5, 6, 7, "8y"];
let [a, b, c, d, e] = num;

console.log("a - "+a);
console.log("b - "+b);
console.log("c - "+c);
console.log("d - "+d);
console.log("e - "+e);

//use rest parameter
let [x, ...y] = num;
console.log(y);
console.log(y[0]);

//define default value

let [m="Default", n, o, p, r, q="Default"]=num;
console.log("m - "+m);
console.log("q - "+q);

let [x3, x4, , , x7 ]=num;
console.log("x3 - "+x3);
console.log("x7 - "+x7);

//Swapping
let x1=9, x2=4;
[x1, x2] = [x2, x1];
console.log(x1 +" , "+x2);
