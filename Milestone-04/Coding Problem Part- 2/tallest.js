const numbers = [65, 66, 68, 72, 78, 60];

//max number defind function
function getMax(numbers) {
  let max = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      //compare
      max = num; //max value change
    }
  }
  return max; // return out put this value
}
const max = getMax(numbers);
// console.log("max value is:", max);

// min number ber korar function ,,

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
        min = num;
    }
  }
  return min ;
}

const min = getMin(numbers);
console.log('get the min number of:', min);
