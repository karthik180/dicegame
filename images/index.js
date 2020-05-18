var player1= Math.floor(Math.random()*6)+1;
var player2= Math.floor(Math.random()*6)+1;
var filename1= "images/dice"+player1+".png";
var filename2= "images/dice"+player2+".png";
document.querySelector("#p1").setAttribute("src",filename1);
document.querySelector("#p2").setAttribute("src",filename2);
if (player1 > player2){
    document.getElementById("main-heading").innerText="Player 1 Wins";
}
else if (player2 > player1) {
    document.getElementById("main-heading").innerText="Player 2 Wins";
}
 else {
  document.getElementById("main-heading").innerText="It's a draw";
 }

	