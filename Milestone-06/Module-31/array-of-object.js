const product =[
    {id:1,name:'lenovo',price:25000},
    {id:2,name:'hp',price:20000},
    {id:3,name:'mec',price:125000},
];

// use map function
const price = product.map(p => p.price)

// use forEach function
const productID = product.forEach(p => console.log(p.id))

// use find function
const findel = product.find(p => p.price > 30000)

// use reduce function
const reduce = product.reduce((acm , current) => acm + current.price , 0)
console.log(reduce);
