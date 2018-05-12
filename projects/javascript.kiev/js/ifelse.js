function task1() {
  let a = +document.getElementById('inp1').value;
  let b = +document.getElementById('inp2').value;

  if (a > b) {
    document.getElementById('ans').innerHTML = a;
  } else if (a < b) {
    document.getElementById('ans').innerHTML = b;
  } else
    document.getElementById('ans').innerHTML = 'числа равны';
}
function task3() {
  let result;
  let appNumber = +document.getElementById('appNumber').value;
  console.log(typeof appNumber);
  if (appNumber >= 1 || appNumber <= 20) {
    result = 'первом';
  } else if (appNumber >= 21 && appNumber <= 48) {
    result = 'втором';
  } else if (appNumber >= 49 && appNumber <= 90) {
    result = 'третьем';
  }
  document.getElementById('ans3').innerHTML = result;
  document.getElementById('answ3').classList.remove('hidden');

}
let x = document.getElementById('test').innerHTML;
console.log(x);
// document.getElementById('test').classList.add('visible');


function hideTag() {
  document.getElementById('test').classList.toggle('hidden');

}

let testTable = document.getElementsByClassName('testclass').innerHTML;
console.log(testTable);
// let login = testTable.getElementsByTagName('td');
// console.log(login);
