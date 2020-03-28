// Once document is loaded
$(document).ready(function () {

    // Current date formatted 
    let currentDay = moment().format("dddd, MMMM Do YYYY");

    // Set current date 
    $("#currentDay").text(currentDay);

    // Saved schedule by index - length 9
    var savedScheduleArr = [, , , , , , , ,];

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

    }

    function addRow(index) {

        // Add new div for row
        var newRow = $("<div>");

        // Check time of day for tense
        var tense = setTense(index);

        // Add tense class
        newRow.addClass(tense);

        // Add row class
        newRow.addClass("row");

        // Add id index
        newRow.attr("id", index);

        // Append to container 
        $(".container").append(newRow);
    }

    function addTimeCol(index) {

        // Add time column
        var newTimeCol = $("<div>");

        // Add classes
        newTimeCol.addClass("col-sm-2");
        newTimeCol.addClass("time-block");

        // Add data-index index
        newTimeCol.attr("data-index", index);

        // String # with index - row id
        indexIdStr = "#" + index;

        // Append to row with index
        $(indexIdStr).append(newTimeCol);

        // Add p for time
        var newTime = $("<p>");

        // Add class
        newTime.addClass("hour");

        // Add data-index index
        newTime.attr("data-index", index);

        // Set time
        var time = getTimeOfIndex(index);
        newTime.text(time);

        // Append to newDiv
        $(newTimeCol).append(newTime);
    }

    function addInputCol(index) {

        // Add new input column
        var newInputCol = $("<div>");

        // Add classes
        newInputCol.addClass("col-sm-8 description");

        // Add data-index index
        newInputCol.attr("data-index", index);

        // String # with index - row id
        indexIdStr = "#" + index;

        // Append to row with index
        $(indexIdStr).append(newInputCol);

        // Add new input
        var newInput = $("<textarea>");

        // Add classes
        newInput.addClass("description textarea");

        // Add data-index index
        newInput.attr("data-index", index);

        // Append to row with index
        $(newInputCol).append(newInput);

    }

    function addSaveCol(index) {

        // Add new save column
        var newSaveCol = $("<div>");

        // Add classes
        newSaveCol.addClass("col-sm-2");
        newSaveCol.addClass("saveBtn");

        // Add data-index index
        newSaveCol.attr("data-index", index);

        // String # with index - row id
        indexIdStr = "#" + index;

        // Append to row with index
        $(indexIdStr).append(newSaveCol);

        // Add new icon
        var newIcon = $("<i>");

        // Add classes
        newIcon.addClass("icon fas fa-save");

        // Add data-index index
        newIcon.attr("data-index", index);

        // Append to row with index
        $(newSaveCol).append(newIcon);

    }

    function getTimeOfIndex(index) {

        // Converts index 0 -> hour 9:00AM
        var time = index + 9;

        // Hour of day - 12 hour
        var hour;

        // Time of day - AM or PM
        var timeOfDay;

        if (time < 10) {
            // Add 0 if less than 10, ex. 4 -> 04
            hour = "0" + time;
        }
        else {
            // Convert to string
            hour = time.toString();
        }

        // Between 9AM -> noon is AM
        if (time >= 9 && time < 12) {
            timeOfDay = "AM";
        }

        // Between noon -> 5 is PM
        else {

            if (hour != 12) {
                // Change to 12 hour time
                hour -= 12;
            }

            timeOfDay = "PM";
        }
        // return formatted time of day
        return hour + ":00" + timeOfDay;
    }


    function setTense(index) {

        // 24-hour
        var rowTime = index + 9;;

        // Time of day - 24-hour formatted
        var timeOfDay = parseInt(moment().format("H"));

        // Add class to row while being built
        // Past time blocks
        if (rowTime < timeOfDay) {
            return "past";
        }
        // Future time blocks
        else if (rowTime > timeOfDay) {
            return "future";
        }
        // Present time blocks
        else {
            return "present";
        }
    }

    $(document).on("click", ".saveBtn", function () {

        // Text area
        var textArea = $(this).parent().children()[1];

        // Text area value
        var text = textArea.children[0].value.trim();

        // Get index of btn
        var index = parseInt($(this).data("index"));

        // Change text in saved schedule
        savedScheduleArr[index] = text;

        // Store saved schedule to local storage
        localStorage.setItem("schedule", JSON.stringify(savedScheduleArr));

        $(this).attr("style", "color: black");
    });

    function getSchedule() {

        // Get schedule from storage
        var storedSchedule = localStorage.getItem("schedule");

        // If stored not null
        if (storedSchedule) {

            // Set savedSchedule to stored
            savedScheduleArr = JSON.parse(storedSchedule);
        }

        // Display schedule to screen
        displaySchedule();

    }

    function displaySchedule() {

        // Text Area for description
        var textAreaArr = $("textarea");

        // Loop through saved schedule to set textarea
        for (var i = 0; i < savedScheduleArr.length; i++) {

            // New text used for setting text at index
            var newText = savedScheduleArr[i];

            // Select and set text to newText
            $(textAreaArr[i]).val(newText);

        }

    }

    // Create schedule elements
    createSchedule();
    
    // Get schedule text blocks from storage
    getSchedule();
});