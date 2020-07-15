function myFn() {
var foo = 'peekaboo!';
console.log(foo); // 'peekaboo!'
}
console.log(foo); // ReferenceError: foo is not defined


if (true) {
var foo = 'peekaboo!';
let bar = 'i see u';
const baz = 'baby blue!';
console.log(foo); // 'peekaboo!';
console.log(bar); // 'i see u';
console.log(baz); // 'baby blue!';
} console.log(foo); // 'peekaboo!';
console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
  
