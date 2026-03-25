// SWITCH FR/EN//
var x = 0;
function showHide() {
  if (x == 0) {
    document.getElementById('text').style.display = 'block';
    x = 1;
  } else {
    document.getElementById('text').style.display = 'none';
    x = 0;
  }
}
// START QUIZZ //
function openOverlay() {
  document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
