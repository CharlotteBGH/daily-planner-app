// Set up day array to loop through
//Might have to create div elements in the HTML instead 
var fabulousDay = [
  {
    hour: "08",
    amorpm: "am",
    entry: "",
  },
  {
    hour: "09",
    amorpm: "am",
    entry: "",
  },
  {
    hour: "10",
    amorpm: "am",
    entry: "",
  },
  {
    hour: "11",
    amorpm: "am",
    entry: "",
  },
  {
    hour: "12",
    amorpm: "pm",
    entry: "",
  },
  {
    hour: "1",
    amorpm: "pm",
    entry: "",
  },
  {
    hour: "2",
    amorpm: "pm",
    entry: "",
  },
  {
    hour: "3",
    amorpm: "pm",
    entry: "",
  },

  {
    hour: "4",
    amorpm: "pm",
    entry: "",
  },
];

// DOM elements to link to JQuery
var displayDateHeader = $("#currentDay");
var timeBlocksSection = $(.timeBlock);
var timeNow = moment().hours();

// Display the current date
function displayDate() {
  var todayDate = dayjs().format("dddd D MMMM YYYY");
  displayDateHeader.text(todayDate);
}

// Create the rows with the times and save icons for the planner entries
var selectedHour = $("<form>").attr;
$("timeBlocks").append(selectedHour);

displayDate();
// Save all of the planner entries to local storage
function savePlannerEntries() {
  localStorage.setItem("fabulousDay", JSON.stringify(fabulousDay));
}

// How does it know if the time is present, past or future?
for (var i = 0; i < timeblock.length i++) {
  if (timeBlocksSection[i].dataset.time < timeNow) {
    timeBlocksSection[i].classList.remove("future");
    timeBlocksSection[i].classList.remove("present");
    timeBlocksSection[i].classList.add("past");
  };

  if (timeBlocksSection[i].dataset.time == timeNow) {
    timeBlocksSection[i].classList.remove("past");
    timeBlocksSection[i].classList.remove("future");
    timeBlocksSection[i].classList.add("present");
  };
  if (timeBlocksSection[i].dataset.time > timeNow) {
    timeBlocksSection[i].classList.remove("past");
    timeBlocksSection[i].classList.remove("present");
    timeBlocksSection[i].classList.add("future");
  }
  };
  
// Present planner entries to the user
function displayPlannerEntries() {}

// ***** DON'T FORGET TO CALL FUNCTIONS!!!!*******
// savePlannerEntries();
// displayPlannerEntries();
