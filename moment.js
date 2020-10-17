
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

 //const saveToLocalStorage = () => {
//localStorage.setItem("textinput", description.textContent)

 
 //}

//saveBtn.addEventListener("click", saveToLocalStorage)
  // check if item is in localStorage for all inputs
//function description(){
  //const description = description.value;
//}

  //saveBtn.onclick = function(){

 //const value = text.value;
//console.log (description);
 // console.log (text);


 // if (description && hour) {
    //localStorage.setItem('description', 'hour');
    //location.reload()
 // }
 // };
  //for (let i = 0; i <localStorage.length; i++){
//const description = localStorage.description(i);
//const value = localStorage.getItem(description);
//hour.innerHTML +=`${description}: ${text}<br />`;
  //}

  //localStorage.setItem('inputId', 'text')
  
  //localStorage.getItem ("inputId")
 // localStorage.getItem('inputID');
  // if it is in local storage, put the value into the input field
  // $(`#${inputId}`).val(item)
//})
//store description();
  //render inputId();
function setColor(element, color) {
 element.style.backgroundColor = color;
}},)});