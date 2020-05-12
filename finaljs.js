/*          Author ---->    Suhail N' Khan //--//     ---->          */
var playing = false;

var score;

var Timeremaining;

var correctanswer;


// starting game
document.getElementById('startreset').onclick = function(){
	//check conditon
	
	if(playing == true){
	
		
//		
		location.reload();
	
//		
	}
	

	else
		

	{
	
   playing = true; //to reload the page when not playing 

		
	document.getElementById('startreset').innerHTML = 'Reset Game';
	//changing start to reset
    score = 0 ;
	
		
	Timeremaining = 60;
	
		
	displayshow('timeremaining');
    
		
	startcounter();
    
		
	GenerateQA();

}
}


function startcounter(){
	
 var action = setInterval(function(){
		
		Timeremaining -= 1;
		
	 //looping timeremaining by -1 sec.
	 document.getElementById('timeremainingvalue').innerHTML= Timeremaining;
	 
		if(Timeremaining == 0){
			
		displayshow('gameover');
			
		document.getElementById('gameover').innerHTML = "Game Over!!! Your score is " + score;
	    
		setTimeout(function(){
			
document.getElementById('gameover').style.display = 'none'}, 5000)
			
			clearInterval(action);
	
			playing = false;
			
	document.getElementById('startreset').innerHTML = 'Start Game';
	
		}},1000);
	
	
}






function GenerateQA(){
	
	var x = 1 + Math.round(Math.random()*9);
	
	var y = 1 + Math.round(Math.random()*9);
	
	
	var correctAnswer = x * y;
   
	document.getElementById('question').innerHTML = x + 'x' + y;
	

	var correctBox = 1 + Math.round(Math.random()*3);
	
	document.getElementById('box'+ correctBox).innerHTML = correctAnswer;
	
	
    for(i= 1;i<5;i++){
		
		
		if(i != correctBox){
			
		
			var wronganswer = 1+ Math.round(Math.random()*9) *Math.round(Math.random()*9);
		
			
	document.getElementById('box'+i ).innerHTML=wronganswer;
		
		}
	}
for(i =1 ; i<5 ;i++){
	
	document.getElementById('box'+ i).onclick= function(){
		
		if(this.innerHTML == correctAnswer){
			
			
			
			
       displayshow("correct");
	   
			
			
			//displayhide("wrong");
	
			setTimeout(function(){
		
		
		
		document.getElementById('correct').style.display = "none";
	},1000)
			
			score ++;
						
	document.getElementById('scorevalue').innerHTML = score;
			
		
			GenerateQA();
			
			
		}else{
			
			
			
			displayshow('wrong');
			
			
			setTimeout(function(){	
				
document.getElementById('wrong').style.display = "none";
	},1000)
			
			
		}
	}
}		
}		
		


function displayshow(element){

	document.getElementById(element).style.display = 'block';
}


function displayhide(element){
		
	document.getElementById('element').style.display = 'none';

}

