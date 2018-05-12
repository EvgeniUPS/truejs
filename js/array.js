var a = [1, 2, 3, 4, 6];
document.write('<br>');

document.write(a.join(' | '));
document.write('<hr>');
document.write(a[3]);
document.write('<hr>');

var dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
document.write(dayOfWeek.join(' | '));
document.write('<br>');
document.write('В массиве ' + dayOfWeek.length + ' элементов');

document.write('<hr>');

// var day = +prompt('Введите номер дня недели');
day = 6
if (day <= 0 || day > dayOfWeek.length) {
  document.write('Ничего не напутали?');

}
else document.write(dayOfWeek[day - 1]);
document.write('<hr>');

var b = [, , ,];
document.write(b);
document.write('<br>');

var d = ['hello', 24, true];
document.write(d);

document.write('<hr>');
//Конструктор Array();
//Лучше не использовать
var a = Array();
var b = Array(1, 2, 3, 4, 5, 6);
document.write(b);
document.write('<br>');

var c = Array(10);
// console.log(c);
document.write(c.length);

document.write('<hr>');
//
var arr = Array(3);

arr[0] = 2;
arr[1] = 5;
arr[2] = 12;
arr[3] = 8;
arr[4] = 23;
document.write('В массиве - ' + arr.join(' | '));
document.write('<br>');



arr[4] = 'Четыре';
arr[10] = 'Десять';




document.write('В массиве - ' + arr.join(' | '));
document.write('<br>');
document.write(arr[4]);
// console.log(arr);

document.write('<hr>');

//**********************************
//length
var arr = ['h', 'e', 'l', 'l', 'o'];
document.write('Длинна массива [' + arr + '] равна = ' + arr.length);
document.write('<br>');
arr.length = 5;
document.write('Длинна массива [' + arr + '] равна = ' + arr.length);
document.write('<br>');

for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + '<br>');

}
document.write('<hr>');
var arr = [111, 222, 333];
document.write(arr);
document.write('<br>');
document.write(arr.length);
document.write('<br>');
arr[10] = 777;
document.write(arr.length);
document.write('<hr>');
//*********************** */
//Ассоциативные массивы

var laptop = { cpu: 'Core i7', ram: '4GB', screen: '15' };
// var key = prompt('введите ключ', 'ram, cpu, screen');
// var key = 'cpu';
// document.write(laptop.key);

document.write(laptop.cpu + '<br>');
document.write(laptop['cpu']);


document.write('<hr>');
//многомерный массив

//Создание многомерного массива
var table = Array(10);
for (var i = 0; i < arr.length; i++) {
  table[i] = Array(10);
}
// document.write(table);


//Инициализация многомерного массива
/* 
for (var row = 0; row < table.length; row++) {
  for (var col = 0; col < table[row].length; col++) {
    if ((row + col) % 2 == 1)
      table[row][col] = '<img src="images/parquet1.jpg" width="50" height="50">';
    else
      table[row][col] = '<img src="images/parquet2.jpg" width="50" height="50">';
    document.write(table[row][col]); //вывод заполненой ячейки сразу
  }
  document.write("<br/>");//разрыв строки
}
 */
var a = [];
for (i = 0; i < 10; i++) {
  a[i] = 2;
  document.write(a[i] + ' | ');
  for (j = 0; j < 10; j++) {
    a[i][j] = 3;
  }
}



document.write('<br>');
var n = 8, m = 8;
var mas = [];
for (var i = 0; i < m; i++) {
  mas[i] = [];


  for (var j = 0; j < n; j++) {
    // if (i + j % 2 == 1) mas[i][j] = 1;
    if (j % 2 == 1) mas[i][j] = '<img src="images/parquet1.jpg" width="50" height="50">';
    // else mas[i][j] = 2;
    else mas[i][j] = '<img src="images/parquet2.jpg" width="50" height="50">';
  }
  // document.write('<br>');

}
console.log(mas);
document.write(mas);





// var arr = Array(10);
// document.write(arr);

// for (col = 0; col < arr.length; col++) {
// arr[col] = col;
// console.log(arr[col]);
// for (row = 0; row < arr.length; row++) {
// arr[col][row] = 2;
// }
// }




























for (var i = 0; i < 50; i++) {
  document.write('<br>');


}




// ЗАДАЧИ НА МАССИВЫ В JAVASCRIPT

// Задание 1. Дан массив mas.Выведите его на страницу HTML в формате индекс элемента — значение(через три дефиса).Каждый элемент с новой строки.

//{
//  mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
// }





//Задание 2. Дан массив mas.Выведите его на страницу HTML в формате индекс элемента — значение(через дефис).Каждый элемент с новой строки.Выводить нужно те элементы, значение которых больше пяти(5).
// {
  // var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
// }