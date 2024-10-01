class Person {
    constructor(name, age){
        this.name = name ;
        this.age = age ;
    }
    sleep(){
        console.log(`sliping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('shakil', 56)
kodom.sleep()

const badam = new Person('badam', 76)
badam.sleep()
console.log(badam);


const person = {
    name:'shakil',
    age:56
}
const name = 'name'
// console.log(person.name);
console.log(person[name]);