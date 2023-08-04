// DOM elements to link to JQuery
var displayDateHeader = $("#currentDay");
var fabulousDay = $(".timeBlock");
var timeBlocksSection = $("#timeBlocks");
var timeNow = moment().hours();
var savedEntry = $(".saveBtn");

// Display the current date
function displayDate() {
  var todayDate = dayjs().format("dddd D MMMM YYYY");
  displayDateHeader.text(todayDate);
}

displayDate();
// Save all of the planner entries to local storage
function savePlannerEntries() {
  localStorage.setItem("fabulousDay", JSON.stringify(fabulousDay));
}
//Need to prevent default clearing of the form when the save button is clicked.
function protectedSavedEntry(event) {
  event.preventDefault();
}
//Confirmation message if saved?

// How does it know if the time is present, past or future?
for (var i = 0; i < fabulousDay.length; i++) {
  if (fabulousDay[i].dataset.time < timeNow) {
    fabulousDay[i].classList.remove("future");
    fabulousDay[i].classList.remove("present");
    fabulousDay[i].classList.add("past");
  }

  if (fabulousDay[i].dataset.time == timeNow) {
    fabulousDay[i].classList.remove("past");
    fabulousDay[i].classList.remove("future");
    fabulousDay[i].classList.add("present");
  }
  if (fabulousDay[i].dataset.time > timeNow) {
    fabulousDay[i].classList.remove("past");
    fabulousDay[i].classList.remove("present");
    fabulousDay[i].classList.add("future");
  }
}
// ***** DON'T FORGET TO CALL FUNCTIONS!!!!*******
savePlannerEntries();
savedEntry.on("click", ".saveBtn", savePlannerEntries);
