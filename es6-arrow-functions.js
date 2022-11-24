//Arrow Functions

//Usual syntax to declare function
function agecalc(){
    age = 10;
    console.log("Fn-1: "+age);
}
agecalc();


//Using arrow functions
var agecalc2 = ()=>{
    age = 10;
    console.log("Fn-2: "+age);
}
agecalc2();

var agecalc3 = () => console.log("Fn-3: "+10);
agecalc3();

//return 10 directly
var agecalc4 = () => 10;
console.log("Fn-4: "+agecalc4());

var sum = (a,b) => a + b;
console.log("Fn-5: "+sum(4,5));

//in case of 1 parameter
var addSome = a => a+11;
console.log("Fn-6: "+addSome(20));

setTimeout(()=>console.log("Hello"), 3000);
