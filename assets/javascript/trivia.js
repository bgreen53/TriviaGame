$(document).ready(function(){

    var seconds
    var time


    function countdown(){
		seconds = 50;
		$("#timeLeft").html("00:" + seconds);
		
		//Sets a delay of one second before the timer starts
		time = setInterval(showCountdown, 1000);
	}


    function showCountdown(){
        seconds--;
    
        if(seconds < 10) {
            $("#timeLeft").html("00:0" + seconds);	
        } else {
            $("#timeLeft").html("00:" + seconds);	
        }
        
        if(seconds < 1){
            clearInterval(time);
            $("#qs").html("<p>Time is up!</p>")
            
            
        }
    }
    
    

$("#accept").on("click", function(){

    console.log("challenge was accepted")

    $("#accept").hide()
    $("#q1").html("<p>1. What musical instrument does Ted steal for Robin multiple times?</p>")
    $("#a1").html("<input type='radio' class= 'r1'>Blue French Horn</input><input type='radio' class= 'r1'>Red Flute</input><input type='radio' class= 'r1'>Golden Drums</input><input type='radio' class= 'r1'>Yellow Clarinet</input>")
    $("#q2").html("<p>2. Marshall grew up in Which Minnesota town?</p>")
    $("#a2").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q3").html("<p>3. Who was Lily's high school boyfriend?</p>")
    $("#a3").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q4").html("<p>4. What is memorable about Ted and Barney's trip to Philidelphia?</p>")
    $("#a4").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q5").html("<p>5. What's the name of the character that based on Ted on the movie 'The wedding bride'?</p>")
    $("#a5").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q6").html("<p>6. Which woman leaves Ted at the alter?</p>")
    $("#a6").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q7").html("<p>7. What college did Ted, Lily and Marshall all attend?</p>")
    $("#a7").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q8").html("<p>8. What was the name of Robin's pop-star persona?</p>")
    $("#a8").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q9").html("<p>9. How often does 'The Naked Man' work?</p>")
    $("#a9").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q10").html("<p>10. When Ted and Barney create a bar, what is the name?</p>")
    $("#a10").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")

    countdown()

    $(".r1").click(function() {
        $(".r1").not(this).prop('checked', false);
    //repeat for each answer line
    
    
    });
});

//create funtion to count each correct, incorrect and unanswered question
//return above data once time is up











});