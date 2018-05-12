let arr = [20, 4, 5, 9];

let a = arr.reduce(function (accum, currentValue, index) {
  console.log('accum = ' + accum);
  console.log(index);
  console.log('currentValue = ' + currentValue);
  return accum + currentValue;

})
console.log('+++++++++++++');
console.log(a);

let b = arr.reduce(function (accum, current) {
  return accum + current;
})
console.log(b);