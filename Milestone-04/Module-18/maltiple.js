const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = true;

// if(salary > 20000 && height >66){
//     console.log('su ...........patro');
// }
// else{
//     console.log('onno parto khujo');
// }

// if (salary > 25000 || height < 70) {
//   console.log("aso baba mogbul");
// } else {
//   console.log("bug toi mogbul");
// }

//  more and more condition

if (salary > 25000 && height < 70 && isBCS == true) {
  console.log("aso baba mogbul");
} else {
  console.log("bug toi mogbul");
}

//   complex condition

if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("tomar 14 gosti raji");
} else {
  console.log("ami raji na");
}
