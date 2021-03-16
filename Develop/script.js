var currentDayE1 = $("#currentDay");


//displays the current date
function displayTime() {
    var timeDateRightNow = moment().format("MMM DD, YYYY | hh:mm:ss a"); // moment gathers time information .format sets the display
    currentDayE1.text(timeDateRightNow); // the text of the currentDayE1 id tag will update with the actual time & date
}

setInterval(displayTime, 1000);