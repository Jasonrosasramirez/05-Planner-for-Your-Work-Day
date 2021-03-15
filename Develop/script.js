var currentDayE1 = $("#currentDay");

function displayTime() {
    var timeDateRightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    currentDayE1.text(timeDateRightNow);
}

setInterval(displayTime, 1000);