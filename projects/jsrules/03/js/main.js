$(document).ready(function () {

  showStartModal(2);
  // localStorage.setItem('key', 'value');

});



function showStartModal(sek) {
  if (localStorage.getItem('modalYesBtn') != 1) {
    setTimeout(() => {
      $('#exampleModal').modal('show')
      $('#modal-yes-btn').on('click', function () {
        //save state modal
        //close modal
        $('#exampleModal').modal('hide');
        localStorage.setItem('modalYesBtn', 1);
      });
    }, sek * 1000);
  }

}




