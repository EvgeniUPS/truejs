var fs = require('fs');

// createRandomDir(10);
// createFileStructure();
myReadfile();
// myReadfileJson();

function myReadfileJson() {
  fs.readFile('t2.json', function (err, data) {
    if (err) throw err;
    var arr = data.toString();
    arr = JSON.parse(arr);
    console.log(arr.name);
    // console.log(data);

  })
}

function myReadfile() {
  fs.readFile('1.txt', function (err, data) {
    if (err) throw err;

    console.error(data.toString());

  })
}


//////////////Create randome folder//////////////
function createFileStructure() {
  fs.mkdir('css', function (err) {
    if (e) console.log(e);
  })
  fs.mkdir('js', function (e) {
    if (e) console.log(e);
  })
  fs.mkdir('img', function (e) {
    if (e) console.log(e);
  })
  console.log('File structure created');
}
//////////////Create structure project//////////////
function createRandomDir(howdir) {
  for (let i = 1; i <= howdir; i++) {
    let rand = Math.round(Math.random() * 100000)
    // fs.mkdir('test_' + rand, function (e) {
    //   if (e) console.log(e);
    //   else {
    //   }
    // });
    console.log('dir create');
    console.log(rand);
  }

}
