const glass = {
  name: "glass",
  color: "golded",
  price: 12,
  isCleaned: true,
};
// console.log(glass);
//property name
const keys = Object.keys(glass);
console.log(keys);

//values name 
const values = Object.values(glass);
console.log(values);


// array of array tow dimentional array || array  like a object.
const pair = Object.entries(glass)
console.log(...pair);

//property delete system...
// delete glass.isCleaned ;
console.log(glass);

const {isCleaned, ...shortGlass} = glass ;

console.log(shortGlass);

//freeze 
Object.seal(glass);
glass.sourse = 'bangladesh';
console.log(glass);
glass.price = 5000 ;
console.log(glass);
delete glass.name ;
console.log(glass);

const numbers = [1,6,8,4];
for (let i = 0; i < numbers.length; i++ ){
    console.log(i);
}
