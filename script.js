$(document).ready(function () {
  // set event listener fot save button
  $(".saveBtn").on("click", function () {
    // targeting the descreiption and saving the input as a value
    var textInput = $(this).siblings("description").val();
    // targeting the parent container throught the Id (hour-(num))
    var timeSection = $(this).parent().attr("id");
    // using scoed variable to save to local stoage in the broswer
    localStorage.setItem(timeSection, textInput);
  });

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  function colorHour() {
    var actualHour = moment().hours();
    // loop over the time block in html
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      if (blockTime < actualHour) {
        $(this).addClass("past");
      } else if (blockTime === actualHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  colorHour();
});

// load local storage
$("#hour-9 .description").val(localStorage.getTime("hour-9"))
$("#hour-10 .description").val(localStorage.getTime("hour-10"))
$("#hour-11 .description").val(localStorage.getTime("hour-11"))
$("#hour-12 .description").val(localStorage.getTime("hour-12"))
$("#hour-1 .description").val(localStorage.getTime("hour-1"))
$("#hour-2 .description").val(localStorage.getTime("hour-2"))
$("#hour-3 .description").val(localStorage.getTime("hour-3"))
$("#hour-4 .description").val(localStorage.getTime("hour-4"))
$("#hour-5 .description").val(localStorage.getTime("hour-5"))
