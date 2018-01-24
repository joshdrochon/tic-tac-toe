var cells = [0,0,0,0,0,0,0,0,0];

function clickedCell(cells,turn,i) {
  // if (cellArray[i] === 0) []
  if (turn % 2 === 0) {
      $("#cell"+i).text("X");
  } else {
      $("#cell"+i).text("O");
  };
  turn +=1;
  return turn;
}

var turn = 0;
$(document).ready(function(){

  for (var i = 0; i < cells.length; i++) {
    $("#cell" + i).val(i);
    $("#cell" + i).click(function(event){
      event.preventDefault();
      if (cells[$(this).val()] === 0) {turn = clickedCell(cells,turn,$(this).val());}
    });
  }

});

























// $("#cell0").click(function(event){
//   event.preventDefault();
//   if (cellArray[0] === 0) turn = clickedCell(cellArray,turn,0);
// });
// $("#cell1").click(function(event){
//   event.preventDefault();
//   if (cellArray[1] === 0) turn = clickedCell(cellArray,turn,1);
// });
// $("#cell2").click(function(event){
//   event.preventDefault();
//   if (cellArray[2] === 0) turn = clickedCell(cellArray,turn,2);
// });
// $("#cell3").click(function(event){
//   event.preventDefault();
//   if (cellArray[3] === 0) turn = clickedCell(cellArray,turn,3);
// });
// $("#cell4").click(function(event){
//   event.preventDefault();
//   if (cellArray[4] === 0) turn = clickedCell(cellArray,turn,4);
// });
// $("#cell5").click(function(event){
//   event.preventDefault();
//   if (cellArray[5] === 0) turn = clickedCell(cellArray,turn,5);
// });
// $("#cell6").click(function(event){
//   event.preventDefault();
//   if (cellArray[6] === 0) turn = clickedCell(cellArray,turn,6);
// });
// $("#cell7").click(function(event){
//   event.preventDefault();
//   if (cellArray[7] === 0) turn = clickedCell(cellArray,turn,7);
// });
// $("#cell8").click(function(event){
//   event.preventDefault();
//   if (cellArray[8] === 0) turn = clickedCell(cellArray,turn,8);
// });
