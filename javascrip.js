/*

var playing = false;
var score ;
var action;
var timeremaining;
var correctanswer;


document.getElementById("startreset").onclick = function(){
if(playing == true){
    location.reload();
}else{
    playing = true;
   score = 0;
document.getElementById("scorevalue").innerHTML = score; document.getElementById("timeremaining").style.display = "block";
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining; 
   // hide("gameover");
document.getElementById("startreset").innerHTML = "Reset Game";
	
 startcountdown();
 generateQA();

} }

 for(i=1 ; i<5 ; i++){
    
    document.getElementById("box"+ i).onclick = function(
){
    if(playing == true){
        if(this.innerHTML == correctanswer ){
            score ++;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("correct").style.display = "block";
              setTimeout(function(){ document.getElementById("correct").style.display = "none";}, 1000) ; 
            
            generateQA();
          //show("correct");
//            document.getElementById("correct").style.display = "block";
                }
        
        else{ 
         document.getElementById("wrong").style.display = "block";
              setTimeout(function(){ document.getElementById("wrong").style.display = "none";}, 1000) ; 
    }
    
}
}
}


function startcountdown(){

   action = setInterval( function(){   
    
       timeremaining -= 1;
       document.getElementById("timeremainingvalue").innerHTML = timeremaining;
   if(timeremaining == 0 ){
   
   stopcountdown();

       document.getElementById("gameover").style.display = "block";
       document.getElementById("gameover").innerHTML = "<p> Game Over! </p> <p> Your score is "+ score + "</p>";
      hide("timeremaining");
       
       hide("correct");
       hide("wrong");
       playing = false;
       document.getElementById("startreset").innerHTML = "Start"; 
   }
   
   } , 1000)
    
    
}

function stopcountdown(){
    
       clearInterval(action);
    
}

function hide(Id){
    document.getElementById("Id").style.display = "none";  
}
function show(Id){
    document.getElementById("Id").style.display = "block";
}


function generateQA(){
    
    var x = 1 + Math.round(9* Math.random());
    var y = 1 + Math.round(9* Math.random());
    correctanswer = x * y;
    document.getElementById("question").innerHTML = x +"x" + y;
	// selects position //
    var correctPosition = 1 + Math.round(4 * Math.random());
document.getElementById("box"+correctPosition).innerHTML = correctanswer;
    //fill one box with the correct answer;
    //fill other box with wrong answer;
    var answer = [correctanswer];
    for(i=1 ; i<5;i++ ){
        if(i != correctPosition){
            var wrongAnswer ;
            do{
                wrongAnswer = ( 1 + Math.round(9* Math.random()) * 1 + Math.round(9* Math.random()));
            }
			while(answer.indexOf(wrongAnswer) > -1) 
			document.getElementById("box"+i).innerHTML=wrongAnswer;     answer.push(wrongAnswer);
			//adds element to array;
	  
       }
        }  
    }



*/