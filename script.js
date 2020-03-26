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