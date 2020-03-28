# Third-Party APIs: Work Day Scheduler

This a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```
AS A coding bootcamp student with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Includes:

```
GIVEN I am using a daily planner to create a schedule
IF I open the planner
THEN the current day is displayed at the top of the calendar
IF I scroll down
THEN I am presented with timeblocks for standard business hours
IF I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
IF I click into a timeblock
THEN I can enter an event
IF I click the save button for that timeblock
THEN the text for that event is saved in local storage
IF I refresh the page
THEN the saved events persist
```
#
The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

#### Dynamically Create Schedule

This function generates each row dynamically by first creating the row, and then creating and appending each column to the row.

```
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

```

#### Local Storage:

When the save button is clicked, text is saved to local storage to be accessed and displayed when the page is reloaded. 

```
$(document).on("click", ".saveBtn", function () {

    // Text area - box
    var textArea = $(this).parent().children()[1];

    // Text area - value
    var text = textArea.children[0].value.trim();

    // Get index of btn
    var index = parseInt($(this).data("index"));

    // Change text in saved schedule
    savedScheduleArr[index] = text;

    // Store saved schedule to local storage
    localStorage.setItem("schedule", JSON.stringify(savedScheduleArr));

});
```

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - to create functionality of quiz
- jQuery - simplified DOM manipulation
- Moment.js - library to work with date and time
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

### Author links
[LinkedIn](https://www.linkedin.com/in/nadine-bundschuh-731233b9)
|
[GitHub](https://github.com/nadineb1160)

### Author Names
- Nadine Bundschuh
