//data access ..
const data = [{id:1 , name:'abul', address:'kochu khet'}];

console.log(data[0].address);

const products = {
    count:5000,
    data: [
        {id:1, name:'lenovo ' ,price:65500},
        {id:2, name:'mec' ,price:65500},
    ]
}

console.log(products.data[1].price);

const user = {
    id:54,
    name:'shakil',
    address:{
        street:{
            first:'45/3 ottora side',
            secend:'45/3 gusan side',
            third:'45/3 rajdani side',
        }
    }
}
const user2 = {
    id:54,
    name:'shakil',
    address:{
        first:'45/3 ottora side',
        secend:'45/3 gusan side',
        third:'45/3 rajdani side',
    }
}

// data chain......
console.log(user.address.street?.secend);
//optional chain....
console.log(user2.address.street?.secend);