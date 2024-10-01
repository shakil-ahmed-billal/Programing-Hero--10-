// function decleartion
function add(a, b) {
  const result = a + b;
  return result;
}
function add(a, b) {
  return a + b;
}
// function expression
const add2 = function (a, b) {
  return a + b;
};

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 +num2 +num3 + num4 ;
const multiply = (num1, num2) => num1 * num2 ;

const sum  = add4(45,46,46,76 )
const mult  = multiply(45,46)
console.log(mult);