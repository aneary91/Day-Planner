$(document).ready(function () {
  // set event listener for save button
  $(".saveBtn").on("click", function () {
    // targeting the descreiption and saving the input as a value
    // var textInput = $(this).siblings("description").val();
    var siblings = $(this).parent().children();
    var userEvent = siblings[1].value;
   
    // targeting the parent container throught the Id (hour-(num))
    // var timeSection = $(this).parent().attr("id");
    var hourInputId = this.parentNode.id;


  
    localStorage.setItem(hourInputId, userEvent);

   
  });

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  function hourColors() {
    var actualHour = moment().hours();
    // loop over the time block in html
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlock < actualTime) {
        $(this).addClass("past");
      } else if (timeBlock === actualTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourColors();



});

// load local storage
$("#hour-9 .description").val(localStorage.getTime("hour-9"));
$("#hour-10 .description").val(localStorage.getTime("hour-10"));
$("#hour-11 .description").val(localStorage.getTime("hour-11"));
$("#hour-12 .description").val(localStorage.getTime("hour-12"));
$("#hour-13 .description").val(localStorage.getTime("hour-13"));
$("#hour-14 .description").val(localStorage.getTime("hour-14"));
$("#hour-15 .description").val(localStorage.getTime("hour-15"));
$("#hour-16 .description").val(localStorage.getTime("hour-16"));
$("#hour-17 .description").val(localStorage.getTime("hour-17"));

