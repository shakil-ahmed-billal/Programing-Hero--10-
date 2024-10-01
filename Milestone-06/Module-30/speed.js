const max = Math.max(34,54,65,87,35,87)
const numbers = [3,5,7,8,9]
const arrayMax = Math.max(...numbers)
// console.log(max);
// console.log(...numbers);
// console.log(arrayMax);

// use spreed operator to copy 
const nums = [ 3,4,6,7,85]
const nums2 = nums ;
// nums2.push(12)

console.log(nums);
console.log(nums2);

const dosto = [...nums, 9999]; //copy
nums.push(100)
console.log(dosto);//add extra copy..
console.log(nums);