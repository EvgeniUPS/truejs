let a = [3, 4, 5];
a[5] = 8;
delete a[1];
//Умножить каждый элемент массива на 2
let b = [];

for (let i = 0; i < a.length; i++) {
  // a[i] *= 2;
  b[i] = a[i] * 2
}
console.log(a);
console.log(b);
console.log('---------------');
//метод массива map
// let c = a.map(function (currentValue, index, array) {
// return currentValue * 3;
// return index;
// return 'tralala';
// });
// console.log(c);

let c = a.map(function (currentValue, index, array) {
  // return index + ' | ' + currentValue * 2;
  // console.log(c);
  console.log(array[1]);
  return currentValue * 2;
})
console.log(c);