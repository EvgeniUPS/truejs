console.log('Work!!!');
let offsetX = 0;
let offsetY = 0;
document.querySelector('#test').onmousemove = function (event) {
  event = event || window.event;
  // console.log(event);
  // console.log(offsetX = event.clientX);
  document.getElementById('offX').innerHTML = event.offsetX;
  // document.getElementById('offY').innerHTML = event.offsetY;
  document.querySelector('#offY').innerHTML = event.offsetY;

}


