// Current Date
let currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);

// Current Time
// Here we want to use setInterval to constantly update the time
let updateTime = function () {
    let currentTime = moment().format('h:mm:ss')
    $("#time").text(currentTime);
}

$("#currentDay").text(currentDay);


// every hour an obj =  {
//     time: 9:00AM
//     text:
//     past: false,
//     present: false,
//     future: false,

// or time = [past,pres,future]
// }




function createSchedule() {
    // Create 8 rows
    for (var i = 0; i < 9; i++) {
        // Create row i
        addRow(i);

        // Add time column to row i
        addTimeCol(i);

        // Add input column to row i
        addInputCol(i);

        // Add save column to row i
        addSaveCol(i);
    }
    // Highligh Past, Present, Future
    highlightRows();

}

function addRow(index) {

    // Add new div
    var newRow = $("<div>");

    // Add row class
    newRow.addClass("row");

    // Add id index
    newRow.attr("id", index);

    // Append to container 
    $(".container").append(newRow);
}

function addTimeCol(index) {

    // *** NEW DIV ***
    var newTimeCol = $("<div>");

    // Add classes
    newTimeCol.addClass("col-sm-2");
    newTimeCol.addClass("time-block");

    // Add id index
    newTimeCol.attr("id", index);

    // String # with index
    indexIdStr = "#" + index;

    // Append to row with index
    $(indexIdStr).append(newTimeCol);

    // *** NEW P ***
    var newTime = $("<p>");

    // Add class
    newTime.addClass("hour");

    // Add id index
    newTime.attr("id", index);

    // Set time
    var time = getTimeOfIndex(index);
    newTime.text(time);

    // Append to newDiv
    $(newTimeCol).append(newTime);
}

function addInputCol(index) {

    // Add new div
    var newCol = $("<div>");

    // Add classes
    newCol.addClass("col-sm-8");
    //newCol.addClass("description");

    // Add id index
    newCol.attr("id", index);

    // String # with index
    indexIdStr = "#" + index;

    // Append to row with index
    $(indexIdStr).append(newCol);

    // Add new input
    var newInput = $("<input>");
    newInput.addClass("description");
    newInput.addClass("textarea");

    // Add id index
    newInput.attr("id", index);

    // Append to row with index
    $(newCol).append(newInput);

}

function addSaveCol(index) {

    // Add new div
    var newSave = $("<div>");

    // Add classes
    newSave.addClass("col-sm-2");
    newSave.addClass("saveBtn");

    // Add id index
    newSave.attr("id", index);

    // String # with index
    indexIdStr = "#" + index;

    // Append to row with index
    $(indexIdStr).append(newSave);
    
    // Add new div
    var newIcon = $("<i>");

    // Add classes
    newIcon.addClass("fas fa-save");

    // Append to row with index
    $(newSave).append(newIcon);

}

function getTimeOfIndex(index) {

    // index 0 -> 9:00Am
    var time = index + 9;
    var hour;
    var timeOfDay;

    // Add 0 if less than 10
    if (time < 10) {

        hour = "0" + time;
        console.log(hour);
    }
    else {
        hour = time.toString();
        console.log(hour);
    }

    // Between 9AM -> noon is AM
    if (time >= 9 && time < 12) {
        timeOfDay = "AM";
    }

    // Between noon -> 5 is PM
    else {

        if (hour != 12) {
            // 12 hour clock
            hour -= 12;
        }

        timeOfDay = "PM";
    }
    return hour + ":00" + timeOfDay;

}

function highlightRows() {
    // Get current time

    // time floored -> past

    //  time between floor and ceiling -> current

    // time ceiling -> future
}

createSchedule();