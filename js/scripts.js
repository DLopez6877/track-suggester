// This is the business (or back-end) logic:

var add = function(preferInput, interactiveInput, question1Input) {
  return preferInput + interactiveInput + question1Input;
}

// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {

  var preferInput = parseInt($("#prefer").val());
  var interactiveInput = parseInt($("#interactive").val());
  var question1Input = parseInt($("#question1").val());

  $("#begin").click(function() {
    $(this).children().fadeOut();
    $(this).next().fadeIn(2500);

  });

  $("form").submit(function(event) {
    event.preventDefault();
    $(this).fadeOut();
    $(this).parent().next().fadeIn(2500);
    $("#result-css").hide();

  });

  $("form#final-form").submit(function(event) {
    event.preventDefault();

    var preferInput = parseInt($("#prefer").val());
    var interactiveInput = parseInt($("#interactive").val());
    var question1Input = parseInt($("#question1").val());
    var score = add(preferInput, interactiveInput, question1Input);

    $(this).fadeOut();

    if ( score < 4 ) {
      $("#result-css").fadeIn(2500);
      console.log(preferInput, interactiveInput, question1Input, score);
    } else if ( score < 7 && score > 3 ){
      $("#result-ruby").fadeIn(2500);
      console.log(preferInput, interactiveInput, question1Input, score);
    } else if ( score < 10 && score > 6 ){
      $("#result-php").fadeIn(2500);
      console.log(preferInput, interactiveInput, question1Input, score);
    } else if ( score < 13 && score > 9 ){
      $("#result-java").fadeIn(2500);
      console.log(preferInput, interactiveInput, question1Input, score);
    } else {
      $("#result-cnet").fadeIn(2500);
      console.log(preferInput, interactiveInput, question1Input, score);
    }

  });

});
