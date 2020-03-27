$(document).ready(function () {

    // Current Date
    let currentDay = moment().format("dddd, MMMM Do YYYY");

    // Set current date 
    $("#currentDay").text(currentDay);


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

        // Add new div
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

        // *** NEW DIV ***
        var newTimeCol = $("<div>");

        // Add classes
        newTimeCol.addClass("col-sm-2");
        newTimeCol.addClass("time-block");

        // Add data-index index
        newTimeCol.attr("data-index", index);

        // String # with index
        indexIdStr = "#" + index;

        // Append to row with index
        $(indexIdStr).append(newTimeCol);

        // *** NEW P ***
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

        // Add new div
        var newCol = $("<div>");

        // Add classes
        newCol.addClass("col-sm-8");
        //newCol.addClass("description");

        // Add data-index index
        newCol.attr("data-index", index);

        // String # with index
        indexIdStr = "#" + index;

        // Append to row with index
        $(indexIdStr).append(newCol);

        // Add new input
        var newInput = $("<textarea>");
        newInput.addClass("description");
        newInput.addClass("textarea");

        // Add data-index index
        newInput.attr("data-index", index);

        // Append to row with index
        $(newCol).append(newInput);

    }

    function addSaveCol(index) {

        // Add new div
        var newSave = $("<div>");

        // Add classes
        newSave.addClass("col-sm-2");
        newSave.addClass("saveBtn");

        // Add data-index index
        newSave.attr("data-index", index);

        // String # with index
        indexIdStr = "#" + index;

        // Append to row with index
        $(indexIdStr).append(newSave);

        // Add new div
        var newIcon = $("<i>");

        // Add classes
        newIcon.addClass("icon fas fa-save");
    
        // Add data-index index
        newIcon.attr("data-index", index);

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
        }
        else {
            hour = time.toString();
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


    function setTense(index) {

        // 24-hour
        var rowTime = index + 9;;

        // Time of day - 24-hour
        var timeOfDay = parseInt(moment().format("H"));

        // Add class to row while being built
        if (rowTime < timeOfDay) {

            return "past";
        }

        else if (rowTime > timeOfDay) {

            return "future";
        }
        else {

            return "present";
        }
    }

    $(document).on("click", ".saveBtn", function () {
        
        // Grab text from input
        // var btnIndex = "#" + this.id;

        // Text area
        var textArea = $(this).parent().children()[1];

        // Text area value
        var text = textArea.children[0].value;
        console.log(text);
        

    });

    createSchedule();
});