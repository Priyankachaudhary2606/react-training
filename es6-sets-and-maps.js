//Maps and Sets

//Set is a collection of unique values

let arr = [1, "2", 4, 4, 8, 12, 8, "8"];
let arrSet = new Set(arr);
arrSet.add(6);
arrSet.add({name: "Priyanka"});
arrSet.add([3,4,5]);
console.log(arrSet);

arrSet.delete(8);
console.log(arrSet);

console.log(arrSet.has("2"));

// arrSet.clear();
// console.log(arrSet);

//Convert set into array
console.log([...arrSet]);

//Map is a collection of key, value pair
const myMap = new Map([[1,2], [2,"4"], ["2",6]]);
myMap.set("2",8);
console.log(myMap);