var currentDayE1 = $("#currentDay");


//displays the current date
function displayTime() {
    var timeDateRightNow = moment().format("MMM DD, YYYY | hh:mm:ss a"); // moment gathers time information .format sets the display
    currentDayE1.text(timeDateRightNow);
}

setInterval(displayTime, 1000);