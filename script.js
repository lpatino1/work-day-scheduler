
//we will use this to set the color of the blocks depending on the current hour
var timeEl = $('.time');


//Display current day and date
var dayDate = moment().format("dddd, MMMM do YYYY");

$("#currentDay").text(dayDate);

//Current Hour
var currentHour =  moment().format("HH");
console.log(currentHour);

//Check hours in planner relative to the current hour: present, past, future

$(".time").each(function(){
 var timeBlock = $(this).attr("id");
  console.log(this);
 if(timeBlock<currentHour){
    $(this).addClass("past");
 } else if(timeBlock==currentHour){
  $(this).addClass("present");
 } else if (timeBlock>currentHour){
  $(this).addClass("future");
 }
})

//global variables
var text1El = $('#nine');
var text2El = $('#ten');
var text3El = $('#eleven');
var text4El = $('#twelve');
var text5El = $('#thirteen');
var text6El = $('#fourteen');
var text7El = $('#fifteen');
var text8El = $('#sixteen');
var text9El = $('#seventeen');


//button handlers
var ninebtnEl = $('#ninebtn');
var tenbtnEl = $('#tenbtn');
var elevenbtnEl = $('#elevenbtn');
var twelvebtnEl = $('#twelvebtn');
var thirteenbtnEl = $('#thirteenbtn');
var fourteenbtnEl = $('#fourteenbtn');
var fifteenbtnEl = $('#fifteenbtn');
var sixteenbtnEl = $('#sixteenbtn');
var seventeenbtnEl = $('#seventeenbtn');


//on-click handlers
(ninebtnEl).on("click", function(e){
  //prevent default (when a page refreshes the stuff clears so stop it)
  e.preventDefault();
  let item = $(text1El).val();
  console.log(item);    
  localStorage.setItem("nine", item);
});


$(tenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text2El).val();
    console.log(item);    
    localStorage.setItem("ten", item);
});

$(elevenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text3El).val();
    console.log(item);    
    localStorage.setItem("eleven", item);
});

$(twelvebtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text4El).val();
    console.log(item);    
    localStorage.setItem("twelve", item);
});

$(thirteenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text5El).val();
    console.log(item);    
    localStorage.setItem("thirteen", item);
});

$(fourteenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text6El).val();
    console.log(item);    
    localStorage.setItem("fourteen", item);
});

$(fifteenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text7El).val();
    console.log(item);    
    localStorage.setItem("fifteen", item);
});

$(sixteenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text8El).val();
    console.log(item);    
    localStorage.setItem("sixteen", item);
});

$(seventeenbtnEl).on("click", function(e){
    //prevent default (when a page refreshes the stuff clears so stop it)
    e.preventDefault();
    let item = $(text9El).val();
    console.log(item);    
    localStorage.setItem("seventeen", item);
});

//display previous saved items
function renderToDo(){
    text1El.text(localStorage.getItem("nine"));
    text2El.text(localStorage.getItem("ten"));
    text3El.text(localStorage.getItem("eleven"));
    text4El.text (localStorage.getItem("twelve"));
    text5El.text (localStorage.getItem("thirteen"));
    text6El.text (localStorage.getItem("fourteen"));
    text7El.text ( localStorage.getItem("fifteen"));
    text8El.text ( localStorage.getItem("sixteen"));
    text9El.text ( localStorage.getItem("seventeen"));
}

renderToDo();
