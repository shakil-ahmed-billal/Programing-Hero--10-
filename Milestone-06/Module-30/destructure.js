const actor = {
    name: 'ananata',
    age: 30,
    phone: '01717653844',
    money: 122302323
}
const phone = actor.phone
// const name = actor.name;
const age = actor.age ;

const {name} = actor ;

console.log(phone);
console.log(age);
console.log(name);

// array destructuring ,,
const numbers  = [ 45, 99];
const [first , second] = numbers ;
const [x,y]= [12,66];

//advance....
function doubleTem(a,b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleTem(6,9);
console.log(prothom);