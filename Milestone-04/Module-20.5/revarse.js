const number = [34,23,56,25,26,53,57,24]

console.log(number);
// number.reverse();
// console.log(number);

let rev = [];
for(const num of number){
    // console.log(num);
    rev.unshift(num)
    // console.log(rev);
}

for (let i = 0;i < number.length; i++ ){
    const num = number[i];
    rev.unshift(num)
    // console.log(rev);
}

for(let  i =number.length -1; i >=0; i--){
    const num = number[i];
    console.log(num);
    rev.push(num);
}
console.log(rev);
