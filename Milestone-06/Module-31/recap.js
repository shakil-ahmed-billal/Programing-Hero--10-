/**
 * var let const
 * 2.default  parameter
 * 3.template sting
 * 4.arrrow function
 * 5.destracturing and sprees oprerator 
 * 6.object.key, object,value object.entrise
 * 7.for of used in array in array and sting ,
 * 8.for in loop used in object
 */

const a = 56;
const numbers = [56, 45, 65];
const parson = {
  name: "shakil",
};

const massage = `hi ${parson.name} has a: ${a} access to ${numbers[2]}`;

const square = (x) => x * x;
const sum = (a, b) => a + b;

const {age, z, ...other} = {x:2, y:5, z:3, name: "ovijeet", age:30}

const [first, secend, ...remaining] = ['ram', 'sam', 'jodho', 'modho']