// Making sure the dom is loaded before running script.
$(document).ready(function(){
    var tries = 0;  // setting users tries to 0.
    $(".btn1").click(function() { // button click assigned to btn1 on games section.
        var userAnswer1 = $(".textBox1").val().toLowerCase(); // Setting users answer as var from text input and setting value to lowercase.
        var q1 = ("ra");  // setting var as q1 answer.
      
        // If else statement to detect users answer is correct.

        if (q1 == userAnswer1){                                         //IF q1 is equal to users answer,
            alert("You are Correct!");                                  // alert to page that user is correct
        }else if(userAnswer1 == ""){                                      //ELSE IF user answer is blank,
            alert("You haven't entered anything, Please try again!");       // alert to page that the user hasn't input any answer.
        }else{                                                              // ELSE if the user has inputed the wrong answer, i.e number, mispelled or wrong
            alert("You have answered incorrectly! , Try using a hint");     // alert to page that the user has answered incorrecty and prompt them to use a hint.
            tries++;                                                          //Add to number of tries.
        }
        checkTries(tries);                                                     // Run function to check tries and pass in as parameter.
    });

    $(".btn2").click(function() {  //button click assigned to btn2 on games section.
        var userAnswer2 = $(".textBox2").val().toLowerCase(); // Setting users answer as var from text input and setting value to lowercase.
        var q2 = ("anubis"); //setting var as q2 answer.
      
        // If else statement to detect users answer is correct.

        if (q2 == userAnswer2){                                             //IF q2 is equal to users answer,
            alert("You are Correct!");                                      // alert to page that user is correct
        }else if(userAnswer2 == ""){                                          //ELSE IF user answer is blank,
            alert("You haven't entered anything, Please try again!");           // alert to page that the user hasn't input any answer.
        }else{                                                                  // ELSE if the user has inputed the wrong answer, i.e number, mispelled or wrong
            alert("You have answered incorrectly! , Try using a hint");         // alert to page that the user has answered incorrecty and prompt them to use a hint.
            tries++;                                                            //Add to number of tries.
        }
        checkTries(tries);                                                      // Run function to check tries and pass in as parameter.
    });
    
    $(".btn3").click(function() {  // button click assigned to btn3 on games section.
        var userAnswer3 = $(".textBox3").val().toLowerCase();; // Setting users answer as var from text input and setting value to lowercase.
        var q3 = ("osiris"); // setting var as q3 answer.

        // If else statement to detect users answer is correct.
      
        if (q3 == userAnswer3){                                                 //IF q3 is equal to users answer,                                        
            alert("You are Correct!");                                           // alert to page that user is correct
        }else if(userAnswer3 == ""){                                              //ELSE IF user answer is blank,
            alert("You haven't entered anything, Please try again!");               // alert to page that the user hasn't input any answer.'
        }else{                                                                      // ELSE if the user has inputed the wrong answer, i.e number, mispelled or wrong
            alert("You have answered incorrectly! , Try using a hint");             // alert to page that the user has answered incorrecty and prompt them to use a hint.
            tries++;                                                                //increment tries.
        } 
        checkTries(tries);                                                          // Run function to check tries and pass in as parameter.
    });

    //Setting up function to check users tries.

    function checkTries(tries) {
        if (tries >= 3){                                            //If tries is greater than or equal to 3,
            alert("You have no more tries left!");                  // alert to page that user has no more tries left.
            $('.challenge input').attr("disabled",true);            //disable the challenge inputs if the user has no more tries left.
        }
    }



    if (!("ontouchstart" in document.documentElement)) {            //if the document does not support touch controls,
        $('img.cat').on('mouseover', function() {                   //show hint animation on cat for users hint.
            $(this).attr('src','images/hint.png');
        });
        $('img.cat').on('mouseout', function() {                    // mouseout function to toggle animation from users mouse.
            $(this).attr('src','images/cat.png');
        });
        $('img.cat').click(function() {                             // click function to show hint when user clicks cat image. 
            $(this).attr('src','images/hint.png');
                alert("Hint: Ra has the form of a Hawk, Anubis has the form of a Jackal and Osiris has green skin.");  // alerts hint to page.
        });
    }
    else { 
        // Detecting double tap on tablet device / touchscreen
        var timer = 0;                                             // setting var timer to 0.
        $(document).on("click" , "img.cat" , function() {         // attaching onclick to cat image animation.
            if(timer == 0) {                                        //if timer is equal to 0
                timer = 1;                                          // set timer to 1.
                timer = setTimeout(function(){ timer = 0; }, 600);      // set time out function to set timer to 0, after 0.6 seconds.
            }
            else {                                                  // else show the hint animation
                $(this).attr('src','images/hint.png');              
                alert("Hint: Ra has the form of a Hawk, Anubis has the form of a Jackal and Osiris has green skin.");  // alerts hint to page
                timer = 0; 
            }
        });
        
        $('img.cat').click(function() {                             // click function on the cat animation
            $(this).attr('src','images/hint.png');
                alert("Hint: Ra has the form of a Hawk, Anubis has the form of a Jackal and Osiris has green skin."); // shows hint on the page.
        });
    }
}); 
