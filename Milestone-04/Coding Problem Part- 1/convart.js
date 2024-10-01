//12 inch 1 feet

function inchFeet(inch){
    const feet = inch /12 ;
    return feet ;
}
function inchToFeet2(inch){
    const feetFrection = inch /12 ;
    const feetNumber = parseInt(feetFrection);
    const inchRemaning  =   inch % 12 ;
    const result = feetNumber +" "+ 'fit ' + inchRemaning +' '+ 'inch';
    return result ;
}

const shovoHeight = inchFeet(65)
// console.log(shovoHeight);

const shovoHeight2 = inchToFeet2(75)
console.log(shovoHeight2);