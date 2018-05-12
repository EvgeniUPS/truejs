let arr = [3, 4, 5, 9];
let arr2 = [];


//indexOf

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 4) {
    arr2.push(arr[i])
  }
}
console.log(arr2);



let a = arr.some(function (b) {
  return b < 5;
})
console.log(a);
// let a = arr.every(function (b) {
//   return b   < 0;
// })
// console.log(a);