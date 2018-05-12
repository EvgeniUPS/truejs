let a = [3, -12, 0, 4, 5, -8];
let a1 = { 'one': 'один', 'two': 'два', 'three': 'три' };
console.log(a1['two']);
let b = [];
//выведет всё, что больше 0
for (let i = 0; i < a.length; i++) {
  if (a[i] >= 0) {
    // b[i] = a[i];
    b.push(a[i]);
  }
}
console.log(a);
console.log(b);

let c1 = a.filter(function (currentValue, index, array) {

})


let c = a.filter(function (x, y, z) {

  // return x >= 0;
  // return (x >= 0);
  // return x % 2 == 0;
  return y % 2 == 0;
});
console.log('=================');
console.log(c);