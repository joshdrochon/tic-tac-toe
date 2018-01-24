
function clickedCell(turn,i) {
  if (turn % 2 === 0) {
      $("#cell"+i).text("X");
  } else {
      $("#cell"+i).text("O");
  };
  turn +=1;
  return turn;
}

$(document).ready(function(){
  var turn = 0;
  $("#cell1").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,1);
  });
  $("#cell2").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,2);
  });
  $("#cell3").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,3);
  });
  $("#cell4").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,4);
  });
  $("#cell5").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,5);
  });
  $("#cell6").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,6);
  });
  $("#cell7").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,7);
  });
  $("#cell8").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,8);
  });
  $("#cell9").click(function(event){
    event.preventDefault();
    turn = clickedCell(turn,9);
  });

});
