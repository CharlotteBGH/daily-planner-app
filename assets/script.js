// DOM elements to link to JQuery
var displayDateHeader = $("#currentDay");
var plannerEntry = $(".timeBlock");
var timeBlocksSection = $(".timeBlocks");
var timeNow = moment().hours();
var savedEntry = $(".saveBtn");

// Display the current date
function displayDate() {
  var todayDate = dayjs().format("dddd D MMMM YYYY");
  displayDateHeader.text(todayDate);
}
displayDate();
//Add an event listener for the button
//savedEntry.on("click", ".saveBtn", savePlannerEntries);
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
for (var i = 0; i < plannerEntry.length; i++) {
  if (plannerEntry[i].dataset.time < timeNow) {
    plannerEntry[i].classList.remove("future");
    plannerEntry[i].classList.remove("present");
    plannerEntry[i].classList.add("past");
  }

  if (plannerEntry[i].dataset.time == timeNow) {
    plannerEntry[i].classList.remove("past");
    plannerEntry[i].classList.remove("future");
    plannerEntry[i].classList.add("present");
  }
  if (plannerEntry[i].dataset.time > timeNow) {
    plannerEntry[i].classList.remove("past");
    plannerEntry[i].classList.remove("present");
    plannerEntry[i].classList.add("future");
  }
}
// ***** DON'T FORGET TO CALL FUNCTIONS!!!!*******
savePlannerEntries();
//protectSavedEntry();
