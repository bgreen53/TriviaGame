$(document).ready(function(){


$("#accept").on("click", function(){

    console.log("challenge was accepted")

    $("#accept").hide()
    $("#q1").html("<p>1. What musical instrument does Ted steal for Robin multiple times?</p>")
    $("#a1").html("<input type='radio'>Blue French Horn</input><input type='radio'>Red Flute</input><input type='radio'>Golden Drums</input><input type='radio'>Yellow Clarinet</input>")
    $("#q2").html("<p>2. Marshall grew up in Which Minnesota town?</p>")
    $("#q3").html("<p>3. Who was Lily's high school boyfriend?</p>")
    $("#q4").html("<p>4. What is memorable about Ted and Barney's trip to Philidelphia?</p>")
    $("#q5").html("<p>5. What's the name of the character that based on Ted on the movie 'The wedding bride'?</p>")
    $("#q6").html("<p>6. Which woman leaves Ted at the alter?</p>")
    $("#q7").html("<p>7. What college did Ted, Lily and Marshall all attend?</p>")
    $("#q8").html("<p>8. What was the name of Robin's pop-star persona?</p>")
    $("#q9").html("<p>9. How often does 'The Naked Man' work?</p>")
    $("#q10").html("<p>10. When Ted and Barney create a bar, what is the name?</p>")
    

})










});