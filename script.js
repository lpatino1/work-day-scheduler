//global variables

//we will use this to set the color of the blocks depending on the current hour
var timeEl = $('.time');

var workDay = [
    ''
]

//Display current day and date
var dayDate = moment().format("dddd, MMMM do YYYY");

$("#currentDay").text(dayDate);

//Current Hour
var currentHour = moment().format("h");
console.log(currentHour);

//Check hours in planner relative to the current hour: present, past, future

function checkHour(hour, currentHour){
    
    console.log(timeEl.value);

} 

checkHour();

//save to local storage, add function to ALL save buttons
$("button").on("click", function(){
    //save to local storage
    //prevent default (when a page refreshes the stuff clears so stop it)
  });