function nameChake(name) {
  if (typeof name !== "string") {
    return "Plase input the valid Name";
  }
  let lastName = name.slice(-1).toLowerCase();
  let result = false;
  let check = ["a", "y", "i", "e", "o", "u", "w"];
  for (let char of check) {
    if (char === lastName) {
      result = true;
    }
  }
  return result ? "good name" : "bad Name";
}

const names = nameChake(['rased']);
console.log(names);
