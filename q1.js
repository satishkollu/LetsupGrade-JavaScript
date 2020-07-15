var a = {name:"Prasad", age:"24", city:"Mexico"}
var b = {name:"Sai Sir", age:"24", city:"Mexico"}
var c = {name:"Viral Sir", age:"24", city:"Mexico"}

console.time('Time taken');
console.log("Hey");
console.error("an error occured!")
console.warn("Hey this is a warning!!");
console.table({a ,b ,c})
console.log('%c Custom message','color:blue;')
console.timeEnd('Time taken');