var tableBodyE1 = $(".tableBody");  //for traversing the table body to reference children
var currentDayE1 = $("#currentDay");
var timeBlockE1 = $(".time-block"); // The sections of each hour
var hourE1 = $(".hour"); // The class displayed for the time of day 


//displays the current date
function displayTime() {
    var timeDateRightNow = moment().format("MMM DD, YYYY | hh:mm:ss a"); // moment gathers time information .format sets the display
    currentDayE1.text(timeDateRightNow); // the text of the currentDayE1 id tag will update with the actual time & date
}

setInterval(displayTime, 1000);


function timeCheck() {
    //Am I late or am I early? 

    var timeCurrently_NoDate = moment().format("hh:mm:ss"); // moment gathers time information .format sets the display
    console.log(timeCurrently_NoDate);


    //still haven't mastered DOM traversal yet. Experimenting with just the 8am time block. Plan to make more modular later on  
    var hour8amHeaderE1 = $("#hour8amHeader");

// use moment() for these checks. Convert the time blocks to hh:mm:ss format

    var format = "hh:mm:ss";
    // var time = moment() gives you current time. no format required.
    var time = moment('09:34:00', format);
    var beforeTime = moment('07:00:00', format);
    var afterTime = moment('09:00:00', format);

    if (time.isBetween(beforeTime, afterTime)) {

        console.log('is between')

    } else {

        console.log('is not between')

    }





    // if this happens in the future 
    hour8amHeaderE1.children(".description").addClass("future"); // I now make the element green by adding the CSS class future 
    
    // else if this happens in the past 
    // hour8amHeaderE1.children(".description").addClass("past"); // I now make the element white by adding the CSS class past

    // else 
    //it's the present and it's red 
}

setInterval(timeCheck, 1000);


function storeMeLocally () {
    //triggered by the save buttons per row
    // will probably involve the .data() method 
}




