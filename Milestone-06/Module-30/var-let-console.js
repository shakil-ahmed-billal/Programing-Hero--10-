// var: no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 25 ;
// money = 50 ; error......
const rich = money +25 ;
// console.log(rich);

let count = 0 ;
count = count + 10 ;
//  console.log(count);

 const numbers = [ 23,35,45,65,76]
//  numbers = [45,45,34,65,67]
numbers[1] = 54 ;
// console.log(numbers);

// object
const student = {
    name: 'mona pakhi',
    class: 12,
}
// student = {name: 'shakil', class: 12 }
student.name = "moyor konthi"
// console.log(student);


// loop
let sum = 0;
for(let i = 0 ; i < 10 ; i++){
    const num = i ;
    sum = sum + num ;
    // console.log(sum);
}