$(document).ready(function () {
  getRate();
});
function getRate() {
  $.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function (data) {
      data = JSON.parse(data);

      console.log(data);
      date1 = data.time;

      console.log('-------------');

      // console.log(data.bpi.USD);
      console.log(date1);

      document.write('Дата обновления : ' + data.time.updated + '<br>');
      document.write('Дата обновления : ' + data.bpi.USD.code + ' - ' + data.bpi.USD.rate);
    }
  );
}


// 
