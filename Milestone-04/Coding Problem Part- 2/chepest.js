const phones = [
    {name: 'samsung', price: 30000 , camera: '12mp', color: 'black'},
    {name: 'Redmi', price: 20000 , camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 25000 , camera: '12mp', color: 'black'},
    {name: 'I Phone', price: 120000 , camera: '12mp', color: 'black'},
    {name: 'Realme', price: 15000 , camera: '12mp', color: 'black'}
];


function chepestPrice (numbers){
    let lowPrice = numbers[0]
    for(const num of numbers){
        if(num.price < lowPrice.price){
            lowPrice = num ;
        }
    }
    return lowPrice ;
}

const chepest = chepestPrice(phones);
console.log(chepest);