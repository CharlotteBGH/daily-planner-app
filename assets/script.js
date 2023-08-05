// DOM elements to link to JQuery
var displayDateHeader = $("#currentDay");
var timeSegment = $(".timeBlock");
var plannerEntry = $(".eventEntry");
var timeBlocksSection = $(".timeBlocks");
var timeNow = moment().hours();
var buttonClicked = $(".saveBtn");

// Display the current date
function displayDate() {
  var todayDate = dayjs().format("dddd D MMMM YYYY");
  displayDateHeader.text(todayDate);
}
displayDate();
//Add an event listener for the button
plannerEntry.on("click", ".saveBtn", savePlannerEntries);
//console.log("button clicked!");
// Save all of the planner entries to local storage when the save button is clicked
function savePlannerEntries() {
  localStorage.setItem("plannerEntry", JSON.stringify(plannerEntry));
}
//Need to prevent default clearing of the form when the save button is clicked.
//function protectSavedEntry(event) {
//event.preventDefault();
//}

// Make it loop through the time divs variable to check whether the listed times are in the past, present of future
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
// ***** DON'T FORGET TO CALL FUNCTIONS!!!!*******
//protectSavedEntry();
