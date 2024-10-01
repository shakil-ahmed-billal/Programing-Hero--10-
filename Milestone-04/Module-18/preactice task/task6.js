let price = 800 ;
const age = 5 ;
const student = true ;

if (age <10){
    price = 0;
    console.log("you can free");
}
else if(age >= 60){
    // 15% discount 
    const discount = (price *15) / 100 ;
    const payAmount = price -discount;
    console.log(payAmount);
}
else if(student === true){
    // 50% discount
    const discount = (price *50) / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}