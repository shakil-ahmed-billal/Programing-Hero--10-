let sum = 0 ;
for(let num = 0; num < 10; num++ ){
    console.log(num);
    sum = sum + num ;
    
}
console.log('total:', sum);


let number = [23,43,54,55,87,34,86];
let sums = 0 ;

for(const num of number){
    console.log(num);
    sum = num + sum ;
}
console.log(sums);
