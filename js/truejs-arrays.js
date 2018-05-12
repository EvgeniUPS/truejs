let a = [];
//push добавляет в конец массива
let b = [12, 13, 66, 999]
b.push(154);
console.log(b);
//pop удаляет с конца массива
b.pop();

console.log(b);

//unshift добавляет в начало массива
b.unshift(11111);
console.log(b);

//shift удаляет с начала массива
b.shift();
console.log(b);
for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    a[i] = '-';
  } else {
    a[i] = '+';
  }
}
document.write(a.join(' | ') + '<br>');


console.log(b[b.length - 1]);

//split из строки в массив
let d = 'Hello world !!!';
// let z = d.split(' ');
// console.log(z[1]);
console.log(d.split(' '));


//join из массива в строку
let join = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
document.write(join.join(' \/ '));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = arr.slice(2, 5);
console.log(arr1.length);

//деструктуризация массива
let arr2 = [2, 7];
let [x, y] = arr2;
console.log('Нулевой элемент массива поместили в x = ' + x);
console.log(y);
console.log(arr2);

