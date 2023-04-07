//==========> SYMBOL
// let symData = Symbol("Amar sonar Bangla.");
// console.log(symData);

//==========> jS Iterators
let myArray = ['a','b','c','d','e','f','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// for(let i = myArray.length; i > -1; i--){
//     console.log(myArray[i]);
// }

// for(myData of myArray){
//     console.log(myData);
// }


let myObj = { //Object is not etarable
    name : "Nayeem Khan",
    age : 33,
    live : "Dhaka",
    job : "front end developer",
    salary : 5000
}

for(newObj of myArray){
    console.log(newObj);
}

//TRY TO PRINT OBJECT BY FOR OF LOOP