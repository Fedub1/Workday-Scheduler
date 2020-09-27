
var moment = moment();
console.log(moment);
console.log(moment.format("dddd, MMMM Do YYYY, h:mm:ss a"));
//var currentDay = ("#currentDay");
document.getElementById('currentDay').innerHTML = moment;
//moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

var moment = Time;
Time = currentHour
$(".row").display(function(){
  const currentHour = moment().hour();
  const rowHour = Number($(this).attr("id"))
   $(this).addClass("past")
if (rowHour === currentHour) {
  $(this).addClass("present")
} else if (rowHour<currentHour){
  $(this).addClass("past")  

} else if (rowHour>currentHour){
  $(this).addClass("future")
}
}) 

$(".eventButton").click(function(){
  const id = $(this).attr("id")
  const inputId = id + "Input"
  localStorage.setItem(inputId, $(`#${inputId}`).val())
})

$(document).ready(function() {
  // check if item is in localStorage for all inputs
  
  localStorage.setItem('inputID', 'value')
  
  localStorage.getItem('inputID');
  // if it is in local storage, put the value into the input field
  // $(`#${inputId}`).val(item)
})
//store inputId();
  //render inputId();
function setColor(element, color) {
 element.style.backgroundColor = color;
}