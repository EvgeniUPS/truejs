
document.onclick = function (event) {
  // console.log(event.target.tagName);
  event = event || window.event; //Для кроссбраузерности
  if (event.target.tagName == 'IMG') {
    event.target.classList.add('bordered');
  }
}