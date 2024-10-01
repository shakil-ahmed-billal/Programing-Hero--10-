const products =[
    {id:1,name:'lenovo',price:25000},
    {id:2,name:'hp',price:20000},
    {id:3,name:'mec',price:125000},
];

//class function use
class Product {
    country = 'bangladesh';
    constructor(name){
        this.name = name ;
    }
    speak(talk){
        console.log(`toking bangladesh ${talk}`);
    }
}
const lenovo = new Product('le le lenovo')
lenovo.speak('oba kita kou');
// console.log(lenovo);


class Teacher{
    constructor(name , subject){
        this.name = name ;
        this.subject = subject ;
    }
    lecture(){
        console.log('sir is tiching math');
    }
}

const topon = new Teacher('topon sir', 'math');
console.log(topon);
