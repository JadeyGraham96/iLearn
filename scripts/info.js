// Script to execute newsletter submission

$(document).ready(function () {
    $('#signBttn').click(function(event){            // click event from sign up button 
        event.preventDefault();                         // prevent default event
        $('.thankyou').removeClass('hidden').fadeIn();  //remove hidden message and show on page
        $('.form').addClass('hidden');                  // hide the form on the page
      });
  });
    
