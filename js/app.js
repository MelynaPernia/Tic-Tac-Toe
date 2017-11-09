window.onload = function() {
  var board = document.querySelector(".board-js");
  board.addEventListener("click", writeText);
  var cell = document.getElementBy
};

var stateCell = false;
var textCell;
function writeText (event) {
  (stateCell) ? textCell="X" : textCell="O";
  stateCell=!stateCell;
  event.target.textContent = textCell;
}

/*  Funcion para limpiar todo el contenido*/
function cleanText () {
  var allCell = document.getElementsByTagName("td");
  for( i = 0 ; i < allCell.length; i++) {
    allCell[i].textContent="";
  }

}
