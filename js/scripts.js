$(document).ready(function(){

  $("#main-section").hide();


  $("#start-button").click(function(){
    $("#main-section").fadeToggle(1500);
    $("#start-section").fadeToggle();
  });

  var answer1 = parseInt($("input[name=question1]:checked").val());
  var answer2 = parseInt($("input[name=question2]:checked").val());
  var answer3 = parseInt($("input[name=question3]:checked").val());
  var answer4 = parseInt($("input[name=question4]:checked").val());
  var answer5 = parseInt($("input[name=question5]:checked").val());
  var result = answer1 + answer2 + answer3 + answer4 + answer5

    // $("#output").text(result);
    // $(".display").fadeToggle();


  $("#submit-button").click(function(){
    alert(result);

  });
});
