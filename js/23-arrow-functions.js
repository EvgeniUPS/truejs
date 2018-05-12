function summ() {
  console.log('Hello' + ' world');
}
// summ();

//----------------------------------------




let a = (param1, param2) => param1 + param2
let b = (param1, param2) => {
  return param1 + param2;
}
let c = param => {
  return param;
}
let d = () => 2 + 4;
console.log('***************');
console.log(a(1, 2));
console.log(b(1, 3));
console.log(c(5));
console.log(d());
console.log('***************');
//----------------------------------------


// ES6 Стрелочные функции
// let myFunc = z => { //если один параметр, можно пропустить скобки
let myFunc = (x, y) => {
  // console.log(x);
  // console.log('Hello' + ' world');
  // console.log(x * 3 * y);
  // return x * 3 * y;
  x * 3 * y;
}




let myFunc1 = (x, y) => x * 3 * y;

// myFunc(4, 5);
// document.write(myFunc(2, 2));
console.log(myFunc(2, 2));
console.log(myFunc1(2, 2));

