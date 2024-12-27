// let x: number | string | any = 1;
// x = "asdasd";

// console.log(x);

function greet(name: string) {
    console.log("Hello " + name);
}
// // greet("asdads");

function sum(a: number, b: number): number {
    return a + b;
}
let ans = sum(10, 32);
console.log(ans);

function delayCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayCall(function () {
    console.log("Hello ");
})