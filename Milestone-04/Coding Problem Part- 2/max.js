const disha = 70;
const slaman = 80;

if (disha > slaman) {
  console.log("salman will get the strawberry");
} else {
  console.log("disha will get the straberry");
}

//inside a function

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max1 = getMax(56, 79);
const max2 = getMax(67, 89);
const ultimateMax = getMax(max1, max2);
console.log("get max of two of:", ultimateMax);