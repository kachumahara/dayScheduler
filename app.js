$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val(); //this refers to the button clicked, and then grabbing the value of the the sibling element of that button element with the class description
      console.log(value);
      var time = $(this).parent().attr("id"); //the parent element of the button that was clicked, and grabbing that ID
      // save in localStorage
      localStorage.setItem(time, value); //saving the time variable as the name and the value of the input into localstorage
    });
  ​  function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
  ​      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]); //just grabbing the number part of the id so for example hour-9, it will grab 9.
  ​        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  ​
    hourUpdater();
  ​
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  ​
    // load any saved data from localStorage
  for (var i = 9; i < 18; i++) {
     $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }
  ​
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  ​
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });