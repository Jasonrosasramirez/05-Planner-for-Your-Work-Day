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

var hourE1 = $(".hour");


// var addingGreento8am = hourE1.first(); //so this turned the 8:00 am green
var row8E1 = $("#row8");
row8E1.addClass("future");

var testQuery = document.getElementById("row8").getAttribute("class");
console.log(testQuery);
console.log("using the git method " + row8E1.get());
