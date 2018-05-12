function first(y) {
  /* setTimeout(function () {
    console.log(1);
  }, 50) */
  console.log(1);
  y();

}
function second(a, b) {
  console.log(a * b);
}


first(function () {
  second(5, 7);
  console.log(100 * 4);
});

// first(second(2, 3));

// second(4, 7);
// first(second(3, 6));
// second(4, 7);
