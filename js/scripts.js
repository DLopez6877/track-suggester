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

    console.log(preferInput, interactiveInput, question1Input)

    $(this).fadeOut();
    $(this).parent().next().fadeIn(2500);

  });

  $("form#final-form").submit(function(event) {
    event.preventDefault();

    $(this).fadeOut();
    $("#result").fadeIn(2500);
      console.log(preferInput, interactiveInput, question1Input)
  });

});
