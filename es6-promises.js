//Promises in ES6

//States of Promises - Pending, Fulfilled, Rejected
//Promise Fulfilled - .then, Promise Rejected - .catch

var f=() => {
    console.log("Promises");
    
    const pr = new Promise((resolve, reject)=>{
     setTimeout(()=>{
         resolve("Data back from server");
     }, 3000);
     
     setTimeout(()=>{
         reject("Data not back from server");
     }, 2000);
        
    });
    
    pr.then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}
f();