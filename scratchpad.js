// const someName = "Rod";

// try {
//   someName = "Emily";
// } catch (error) {
//   console.log("There was an error");
//   console.log (error)
// }

// console.log(someName);

const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
console.log(jsonString); // a string, of course :)

const obj = JSON.parse(jsonString);
console.log(obj )

delete obj.foo;
console.log(obj )

console.log(JSON.stringify(obj));
