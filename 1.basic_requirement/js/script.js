const points = [4,2,6,7,2,4,5,6,8,9];

// impure function with side effect
let total = 0;
function add(x) {
    total += x;
    return total;
}
console.log(add(5));
console.log(add(25));

// pure function
function pureAdd(x, y) {
    return x + y;
}
console.log(pureAdd(3,4));
console.log(pureAdd(5,7));

// console.log(points);

// const newPoints = [...points, "aaa"];

// console.log(newPoints);

// declarative style နဲ့ points မတူအောင်လုပ်
// const uniqueArray = new Set(points);
// console.log(uniqueArray);

// imperative way
// let total = 0;
// for (point of points) {
//     total += point;
// }
// console.log(total);

// declarative way
// const total = points.reduce((pv, cv) => pv + cv, 0);
// console.log(total);