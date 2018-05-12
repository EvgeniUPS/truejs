let t = -9;
imgToHtml();
function imgToHtml() {
  for (let i = 1; i <= 5; i++) {
    document.write('<img src="img/0' + i + '.png" alt="i" title="' + i + '">');
  }
}
if (t > 0) console.log('t больше 0');
else if (t < 0) console.log('t меньше 0');
else console.log('t равно 0');

function showTemp(first, second) {
  let a = 8;
  console.log(a);
  if (first > second) console.log(first + ' больше ' + second);
  else if (first < second) console.log(first + ' меньше ' + second);
  else console.log(first + ' равно ' + second);
}

function showTemp1(first, second) {
  let out;
  if (first > second) return first + ' больше ' + second;
  else if (first < second) return first + ' меньше ' + second;
  else return first + ' равно ' + second;
}

function showTemp2(first, second) {
  let out;
  if (first > second) out = first + ' больше ' + second;
  else if (first < second) out = first + ' меньше ' + second;
  else out = first + ' равно ' + second;
  return out;
}

showTemp(t, 10);
console.log('------');
console.log(showTemp1(2, 0));
console.log(showTemp2(6, 4));


//ES6
function sum(a = 0, b = 5) {
  // console.log('результат sum = ' + (a + b));
  return a + b;

}
// console.log(sum(2, 5));
// sum(4, 10);
console.log(3 * sum(2, 3));

