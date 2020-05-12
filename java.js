
/*

var play = false;
var score;
var timeremaining;
var action;

document.getElementById("startreset").onclick= function(){
if(play == true){
	 location.reload();
	
}
	else{
		
	score = 0;
	document.getElementById("scorevalue").innerHTML = score;
    timeremaining = 60	;		
	document.getElementById("timeremaining").style.display = "block";
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
	document.getElementById("startreset").innerHTML = "Reset Game";
   document.getElementById("gameover").style.display = "none";
		
	startcountdown();
	StartQA()	;
		
		}

}





	function startcountdown(){
	action = setInterval(function(){
	timeremaining -= 1;
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		
	if(timeremaining == 0){
			stopcounter();
			document.getElementById("gameover")	.style.display = "block";
				play = false; 
	document.getElementById("startreset").innerHTML = "Start Game";			
	document.getElementById("gameover").innerHTML =	"<p>Game Over Your score is: " + score + "</p>";   
	}			
		} , 1000);
		
	}

function stopcounter(){
	clearInterval(action);
}


function StartQA(){
	var x = 1 + Math.round(9* Math.random());
    var y = 1 + Math.round(9* Math.random());
	var correctAnswer = x*y;
	document.getElementById("question").innerHTML = x + "x" + y;
	var correctbox = 1 + Math.round(4 * Math.random());
   document.getElementById("box"+correctbox).innerHTML = correctAnswer;
for(i=0;i<5;i++){
	 var answer = [correctanswer];
    for(i=1 ; i<5;i++ ){
        if(i != correctPosition){
            var wrongAnswer ;
            do{
                wrongAnswer = ( 1 + Math.round(9* Math.random()) * 1 + Math.round(9* Math.random()));
            }
 
  document.getElementById("box"+i).innerHTML=wrongAnswer;     answer.push(wrongAnswer);

}
}

*/

