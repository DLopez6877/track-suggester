// This is the business (or back-end) logic:



// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {

  $("#begin").click(function() {
    $(this).children().fadeOut();
    $(this).next().fadeIn(2500);
  });

  $("form").submit(function(event) {
    event.preventDefault();
    $(this).fadeOut();
    $(this).parent().next().fadeIn(2500);
  });

  $("form#final-form").submit(function(event) {
    event.preventDefault();
    $(this).fadeOut();
    $("#result").fadeIn(2500);
  });

});
