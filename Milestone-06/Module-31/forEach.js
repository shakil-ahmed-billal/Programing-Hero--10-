/**
 * map-----
 * foreach-
 * find----
 * filter--
 * reduce--
 */


// forEach function.....

const numbers = [1,3,4,5,7,8,9];
// const result = numbers.forEach()

// filter function........

// filter select element based on a condition and return...array
const player = [45,56,76,45,87,98];
const friend = ['shakil', 'sjakib','jalam','kaaml']

// const select = player.filter(p => p> 70);
const select = player.filter(p => p % 2 === 0);
// console.log(select);
const friendSelect = friend.filter(friend => friend.length > 5);
// console.log(friendSelect);

// find function .......

const playerSelecet = player.find(num => num > 70)
// console.log(playerSelecet);;

const total = numbers.reduce((num1, num2) => num1 + num2, 0)
console.log(total);


