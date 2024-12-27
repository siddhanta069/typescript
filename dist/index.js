"use strict";
// let x: number | string | any = 1;
// x = "asdasd";
// console.log(x);
function greet(name) {
    console.log("Hello " + name);
}
// // greet("asdads");
function sum(a, b) {
    return a + b;
}
let ans = sum(10, 32);
console.log(ans);
function delayCall(fn) {
    setTimeout(fn, 1000);
}
delayCall(function () {
    console.log("Hello ");
});
