function randomInteger(min = 0, max = 250) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  // console.log(variable);
  rand = Math.round(rand);
  return rand;
}

function changeColor() {
  let parag = document.getElementById('output');
  let r1 = [];
  for (let i = 0; i < 3; i++) {
    r1[i] = randomInteger();
  }
  parag.style.background = 'rgb(' + r1 + ')';
  parag.style.borderRadius = 40;
  console.log(parag.style.background);

  // console.log(r1);
  // parag.innerHTML = 123123;
  // let red = parag.style.background('red');
  // console.log(red);
}











function changeBg() {
  // let randomeColor = randomInteger(0, 255) + ',' + randomInteger(0, 255) + ',' + randomInteger(0, 255);
  let r1 = [];
  for (let i = 0; i < 3; i++) {
    r1[i] = randomInteger();
  }
  // document.body.style.backgroundColor = 'rgb(' + r1 + ')';
  // console.log(randomeColor);
  // document.getElementById('output').innerHTML = r1;
  // document.write(r1);
  // document.write(randomeColor);
}

