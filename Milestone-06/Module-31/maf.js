// map loops through each element of the array

const numbers = [4, 5, 45, 65, 5];

function doubled(num) {
  console.log("num now", num);
  return num * 2;
}

// const result = numbers.map(doubled)
const output1 = numbers.map(n => n * 2);
// console.log(result);
console.log(output1);

const output = (n) => n * 2;

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2
//     doubled.push(double)
// }
