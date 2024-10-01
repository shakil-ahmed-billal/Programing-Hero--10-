/**
 *            Looping technique..
 * 1.for loop
 * 2.while loop
 * 3.do while ........ignore this part
 * 4.for in ....array loop korar jono
 * 5.for of.....object loop koarar jonno
 */


// for of
const freinds = ['elon','bill','mark','waren']

for(const freind of freinds){
    // console.log(freind);
}


// for loop
for (let i = 0; i < freinds.length ; i++){
    // console.log(i);
    // console.log(freinds[i]);
}


const number = [34,23,56,25,26,53,57,24]

 for(let i = 0; i <number.length; i++){
    // console.log(number[i]);
 }

 let i = 0 ;
 while (i < freinds.length){
    console.log(freinds[i]);
    i++
 }

 let n =0 ;

 while(n < number.length){
    console.log(number[n]);
    n++
 }