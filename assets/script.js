$(document).ready(function () {
  // DOM elements to link to JQuery
  var displayDateHeader = $("#currentDay");
  var timeSegment = $(".timeBlock");
  //Get the current time so the calendar can compare itself to change the colours
  var timeNow = moment().hours();

  // Display the current date
  function displayDate() {
    var todayDate = dayjs().format("dddd D MMMM YYYY");
    displayDateHeader.text(todayDate);
  }
  displayDate();

  // Make it loop through the time divs variable to check whether the listed times are in the past, present or future
  for (var i = 0; i < timeSegment.length; i++) {
    if (timeSegment[i].dataset.time < timeNow) {
      timeSegment[i].classList.remove("future");
      timeSegment[i].classList.remove("present");
      timeSegment[i].classList.add("past");
    }

    if (timeSegment[i].dataset.time == timeNow) {
      timeSegment[i].classList.remove("past");
      timeSegment[i].classList.remove("future");
      timeSegment[i].classList.add("present");
    }
    if (timeSegment[i].dataset.time > timeNow) {
      timeSegment[i].classList.remove("past");
      timeSegment[i].classList.remove("present");
      timeSegment[i].classList.add("future");
    }
  }

  //Add an event listener for the save button. It needs to pull through the ID of the time block it is contained within.
  //Need to prevent default clearing of the form when the page is refreshed.
  $(".saveBtn").click(function (event) {
    //console.log("The save button has been clicked!"); - This is working
    //prompt("Excellent work! Your plan has been saved."); - This is working
    event.preventDefault();
    var plannerEntry = $(this).siblings(".eventEntry").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(plannerEntry, hour);
  });
  // Retrieve entries from local storage
  $("8am .eventEntry").val(localStorage.getItem("8am"));
  $("9am .eventEntry").val(localStorage.getItem("9am"));
  $("10am .eventEntry").val(localStorage.getItem("10am"));
  $("11am .eventEntry").val(localStorage.getItem("11am"));
  $("12pm .eventEntry").val(localStorage.getItem("12pm"));
  $("1pm .eventEntry").val(localStorage.getItem("1pm"));
  $("2pm .eventEntry").val(localStorage.getItem("2pm"));
  $("3pm .eventEntry").val(localStorage.getItem("3pm"));
  $("4pm .eventEntry").val(localStorage.getItem("4pm"));

  console.log(localStorage);
});
