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

    var timeCurrentlyNoDate = moment().format("hh:mm:ss"); // moment gathers time information .format sets the display
    

    $(".saveBtn").on("click", function(){
        var saveText = $(this).siblings(".description").val();  //use this when 
        var hourBlock = $(this).parent().attr("id");

        localStorage.setItem(hourBlock, saveText);
    }
    )

    function hourColorizer () {
        var presentHour = moment().hours();

        $(".time-block").each(function() {
            var hourBlock = parseInt(($(this).attr("id").split("-")[1]))

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
    }

    hourColorizer();

}

setInterval(timeCheck, 1000);


$("#hour-9 .description").val(localStorage.getItem("hour-9")); 
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-11")); 
$("#hour-12 .description").val(localStorage.getItem("hour-12")); 
$("#hour-13 .description").val(localStorage.getItem("hour-13")); 
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15")); 
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17")); 

