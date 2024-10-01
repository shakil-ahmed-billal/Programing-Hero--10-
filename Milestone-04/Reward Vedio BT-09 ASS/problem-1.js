function calculateMoney(ticketSale){
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return 'Invalid Number';
    }
    let remaingAmount = ticketSale * 120 - (500 + 8 *50)
    return remaingAmount ;
}

const total = calculateMoney('sdf');
console.log(total);