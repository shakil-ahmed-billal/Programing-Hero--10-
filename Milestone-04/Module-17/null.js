let emptyObject = null; // Represents an empty object
let uninitializedVariable; // Undefined (no value assigned)

if (emptyObject === null) {
    console.log("emptyObject is null");
}

if (uninitializedVariable === undefined) {
    console.log("uninitializedVariable is undefined");
}

console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)