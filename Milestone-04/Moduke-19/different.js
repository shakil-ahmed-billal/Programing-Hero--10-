// odd number 
// for (let num = 0; num <20; num++){
//     if(num % 2 === 1){
//         console.log(num);
//     }
// }


// different style
// for (let num = 0; num <20; num++){
//     if(num % 2 !== 0){
//         console.log(num);
//     }
// }


// even number
// for (let num = 0; num <20; num++){
//     if(num % 2 === 0){
//         console.log(num);
//     }
// }



// for(let num = 1 ; num <=30; num++){
//     // if(num % 5 === 0 || num % 3 ===0){
//     if(num % 5 === 0 && num % 3 ===0){
//         console.log(num);
//     }
// }

let sum = 0;

for (let num = 0; num <=20; num++){
    if(num % 3 ==0){
        sum = sum + num;
        console.log(num);
    }
}
console.log('sum number:', sum);