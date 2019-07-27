/*
Q1:
Check if jQuery is loaded
*/
$(document).ready(function(){
    if (jQuery) {
        alert("jQuery is loaded");
    }
});

/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

        $(document).ready(function (){
            $("#button3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#q1").offset().top
                }, 4000);
            });
        });


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$(document).ready(function (){
    $("#btn1").click(function (){
        $("#btn1").css({ width: '300px', height: '100px'  });
    });
});
$(document).ready(function (){
    $("#box").click(function (){
        $("#box").css({ width: '300px', height: '300px'  });
    });
});
//reset

$(document).ready(function (){
    $("#btn2").click(function (){
        $("#box").css({ width: '150px', height: '150px',margin:'15px',background:'#3f3f3f'  });
        $("#btn1").removeAttr('style');
    });
});

/*
Q4:
Learn how to fadein your boxes
*/
$(document).ready(function (){
    $( "#fa" ).click(function() {
        $( "#div1" ).fadeIn( "slow");
        $( "#div2" ).fadeIn( "slow");
        $( "#div3" ).fadeIn( "slow");
        
      });
});

/*
Q5:
User must first accept then he or she can signup
*/

$(document).ready(function () {
    $('#myCheckbox').click(function () {
      $('#myButton').prop("disabled", !$("#myCheckbox").prop("checked")); 
    //   $('#myButton').attr("disabled", !this.checked); 
    })
  });
/*
Q6:
Let them print
*/
$(document).ready(function () {
    $('.printPage').click(function () {
window.print();
})
});
/*
Q7:
Can username be too long? Yest it can - lets limit that
*/

var maxLength = 20;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
  $('#textarea').prop("maxlength",20);
});
/*
Q8:
Wanna make some words bolder, do it with jQuery
*/

$(document).ready(function () {
    $('.bold').css("font-weight","Bold");
});
/*
Q9:
Add new div to your website
*/
var addDiv = $('input[value="Click to add new div"]');
function new_div() {
  
  
    addDiv.after('<div style="border:1px solid red; height:200px; width:200px; "></div>');

}
/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/

$(document).ready(function () {
    $('#btnclick').click(function () {
        $('ul').append('<li><a href="#">New Element</a></li>');
    })
});
/*
Q12:
Know what user puts into textbox
*/
$(document).ready(function () {
    $('#usertext').keyup(function () {
       console.log( $('#usertext').val());
    })
});

/*
Q13:
Change input value
*/
$(document).ready(function() {
    $('#button').val('Rawabi');
 });



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 