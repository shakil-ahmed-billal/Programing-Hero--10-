// singel perameter
const difference = (x, y) => x - y;
const multiply = (first, secend, third) => first* secend * third ;


const getAge = (person) => person.age;
const student = {name: 'shakil', age: 65};
const age = getAge(student )
console.log(age);

const getThisrd = numbers=> numbers[2];
const third = getThisrd([34,54,765,234,75]);
console.log(third);

// no parameter 
const getPI = () => Math.PI
console.log(getPI());

// large parameter function . if you want to get anything return form 
const domath = (x,y,z) =>{
    const sum = x + y + z ;
    const mult = x * y * z ;
    const result = sum + mult ;
    return result ;
}