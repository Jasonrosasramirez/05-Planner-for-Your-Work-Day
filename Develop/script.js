var currentDayE1 = $("#currentDay");


// displays the current time and date on the Jumbotron
function displayTime() {
    var timeDateRightNow = moment().format("MMM DD, YYYY | hh:mm:ss a"); // moment gathers time information .format sets the display
    currentDayE1.text(timeDateRightNow); // 
}

// changes each cell color based on the time of day
function hourColorizer () {
    var presentHour = moment().hours(); // Uses 24 time. Retrives the hour of the day (example: 12:30 am results as a 0)

    $(".time-block").each(function() {
        // This loop is basically an if look that cycles through each of the .time-block divs, preventing us from needing to write ind lines to search. 

        // getting this line was the hardest part of the assignment.
        var hourBlock = parseInt(($(this).attr("id").split("-")[1]))    // converts the result into an integer to compare. 'this' is the variable used when we aren't sure which block will trigger. plit removes the '-' from the class name. 

        // Here is where the checking happens. This decides what the colors should be. 
        if (hourBlock < presentHour) {
            $(this).addClass("past");
        }
        else if(hourBlock === presentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

    // white means the time has already passed for the day (past)
    // red is the current time (present)
    // green means the time has yet to happen (future)
}

function timeCheckMain () {
    // Everything within this function gets called once per second 

    displayTime();      // displays the current time and date on the Jumbotron
    hourColorizer();        // changes each cell color based on the time of day

    $(".saveBtn").on("click", function(){

        var saveText = $(this).siblings(".description").val();  // 'this' is used for a variable div that will trigger the event. this is what is typed in the text box. stored as a description value
        var hourBlock = $(this).parent().attr("id"); // references the parent node (hour-9 for example). Will be referenced in the getItem section. 

        localStorage.setItem(hourBlock, saveText); // web storage API. localStorage.setItem(what you're storing to, what you are actually storing)
    })

}


// all functions run once per second
setInterval(timeCheckMain, 1000);


// below are how the local storages are referenced using the API localStorage.getItem
$("#hour-9 .description").val(localStorage.getItem("hour-9")); 
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-11")); 
$("#hour-12 .description").val(localStorage.getItem("hour-12")); 
$("#hour-13 .description").val(localStorage.getItem("hour-13")); 
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15")); 
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17")); 

