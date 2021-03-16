var tableBodyE1 = $(".tableBody");  //for traversing the table body to reference children
var currentDayE1 = $("#currentDay");
var timeBlockE1 = $(".time-block"); // The sections of each hour


//displays the current date
function displayTime() {
    var timeDateRightNow = moment().format("MMM DD, YYYY | hh:mm:ss a"); // moment gathers time information .format sets the display
    currentDayE1.text(timeDateRightNow); // the text of the currentDayE1 id tag will update with the actual time & date
}

setInterval(displayTime, 1000);




//What i will be exp with 
var hour8amHeaderE1 = $("#hour8amHeader");
var descriptionE1 = $("description");
var testE1 = $("#test");


testE1.addClass("future");
var testQuery = document.getElementById("test").getAttribute("class");
console.log(testQuery);
