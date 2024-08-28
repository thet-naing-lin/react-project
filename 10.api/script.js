console.log("hello");

try {
    let x = 5;
    x()
} catch(e) {
    // console.log(e);
    // console.dir(e);
    // console.log(e.message);
    alert(e.message)
}

console.log("World");