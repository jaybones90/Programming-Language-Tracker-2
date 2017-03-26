$(document).ready(function(){

  $("#main-section").hide();
  $(".answer-display").hide();
  $("#submit-button").hide();


  $("#start-button").click(function(){
    $("#main-section").fadeToggle(1500);
    $("#start-section").fadeToggle();
    $("#submit-button").fadeToggle();
  });



  $("#submit-button").click(function(){
    var answer1 = parseInt($("input[name=question1]:checked").val());
    var answer2 = parseInt($("input[name=question2]:checked").val());
    var answer3 = parseInt($("input[name=question3]:checked").val());
    var answer4 = parseInt($("input[name=question4]:checked").val());
    var answer5 = parseInt($("input[name=question5]:checked").val());
    var result = answer1 + answer2 + answer3 + answer4 + answer5;
    $("#main-section, .answer-display").fadeToggle(500);
    $("#submit-button").hide();



    if (result <= 6) {
      $("#output").text("You Should Take The Ruby/Rails Track!")
    } else if (result <= 8 ) {
      $("#output").text("You Should Take The Java/Android Track!")
    } else if (result <= 10) {
      $("#output").text("You Should Take The PHP/Drupal Track!")
    } else if (result <= 12) {
      $("#output").text("You Should Take The CSS/Design Track!")
    } else if (result <= 15) {
      $("#output").text("You Should Take The C#/.NET Track!")
    }

  });



});
