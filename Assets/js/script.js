// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $("#hours").on("click", ".btn", function(event) {
    var btnClicked = ($(this).parents().attr("id"))
    var hourTask = ($(this).parents().children("textarea").val())
    localStorage.setItem(btnClicked, hourTask)
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. Add code to get any user 
  // input that was saved in localStorage and set the values of the corresponding 
  // textarea elements.
  for (i = 9; i < 18; i++) {
    var currentHour = $("#hours").children().eq(i-9)
    var hourNum = currentHour.attr("id").slice(5)
    var realHour = dayjs().hour()
    if (hourNum < realHour) {
      currentHour.addClass("past")
    } else if (hourNum > realHour) {
      currentHour.addClass("future")
    } else {
      currentHour.addClass("present")
    }

    var currentId = "hour-" + hourNum
    var savedText = localStorage.getItem(currentId)
    var textEl = currentHour.children("textarea")
    textEl.text(savedText)
  }

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM DD, YYYY"))
});
