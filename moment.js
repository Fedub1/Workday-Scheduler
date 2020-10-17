
var m = moment();
console.log(m);
console.log(m.format("dddd, MMMM Do YYYY, h:mm:ss a"));
//var currentDay = ("#currentDay");
document.getElementById('currentDay').innerHTML = m;
//moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

//var mmoment = Time;--
//Time = currentHour
$(".row").each(function(){  
  const currentHour = parseInt(m.format("H"));
  const rowHour = parseInt($(this).attr("id"));
console.log(currentHour);

   $(this).addClass("past")
if (rowHour === currentHour) {
  $(this).addClass("present");
} else if (rowHour<currentHour){
  $(this).addClass("past");  

} else if (rowHour>currentHour) {
  $(this).addClass("future");
}

$(".saveBtn").click(function(){
  const id = $(this).attr("id")
 const inputId = id + "Input"
 localStorage.setItem(inputId, $(`#${inputId}`).val())
})

$(document).ready(function() {
 
 const rowInput = document.querySelector(".row");
 const textarea = document.getElementById ("#textarea");
 //const hourInput = document.getElementById ("hour");
 const saveBtn = document.querySelector(".saveBtn");
 const storedText = localStorage.getItem("hourInput");
 

 if(storedText) {
   textarea.textContent = storedText
 }
rowInput.addEventListener('textarea', lettter => {
  console.log(localStorage)
  textarea.textContent = letter.target.value

})


function setColor(element, color) {
 element.style.backgroundColor = color;
}},)});