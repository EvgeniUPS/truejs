function userProgress(time) {
  var start = 0;
  var ttt = document.getElementById('out');
  var progressElement = document.getElementById('user-progress');
  var intervalId = setInterval(() => {
    console.log(progressElement.value);
    out.innerHTML = progressElement.value;
    if (start > 100) {
      clearInterval(intervalId);
    } else {
      progressElement.value = start;
    }
    start++;

  }, time);
}

userProgress(50);
