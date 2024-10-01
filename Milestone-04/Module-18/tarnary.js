// ternary --- three part
// condition ? do somethink when true ; do something

// const age = 3;

// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log(" gumai thako");
// }

// simple ternary
// age >= 18 ? console.log('gumaiya thako') : console.log('vote dew');

let price = 1200;
const isLeader = false;

// if (isLeader == true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);



// advance ternary
// price = isLeader === true ? 0 : price + 100 ;

// advance tarnary


// if (isLeader === true){
//     price = price / 2;
// }
// else{
//     price = price + 100;
// }
// console.log(price);

price = isLeader ? price / 2 : price + 100;
console.log(price);