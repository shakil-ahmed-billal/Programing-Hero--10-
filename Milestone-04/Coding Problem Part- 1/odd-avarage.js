/***
 * finction takes an array as parameter
 * give me the avarage of the odd number in the array
 * 
 */

function oddAverage(numbers){
    let avg = [];
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 1 ){
            avg.push(number)
        }
    }
    for(const number of avg){
        sum = sum + number;
    }
    const count = avg.length;
    console.log(sum , count);
    const oddAvg = sum / count ;
    return oddAvg ;
}

const numbers = [42,13,45,67,45,76,45,5,3,709]
const avg = oddAverage(numbers)
console.log('average if the odd numbers is:',avg);