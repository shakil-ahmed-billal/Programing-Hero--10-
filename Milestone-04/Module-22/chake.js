function calculateFinalScore(obj) {
  let sum = obj.testScore + obj.schoolGrade;

  if (typeof obj !== "object") {
    return "Invalid Input";
  } 
  else if (obj.isFFamily === true) {
    let qota = 20;
    sum = sum + qota;
    if (sum >= 80) {
      return true;
    }
  }
  return false;
}

const obj = "hello";
console.log(calculateFinalScore(obj));
