/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet() {
var time = new Date('March 13, 08 01:00').getHours()
var hours = new Date('March 13, 08 12:00').getHours()
  for(let e = 1; e < 24; e++) {
    if(time < hours) {
      return "Good Morning";
    } else if (time+e > hours && time+e < hours+5){
      return "Good Afternoon";
    } else if (time+e > hours+5) {
      return "Good Evening";
    }
  }
  
} 

const message = document.getElementById("greeting")

function displayMessage() {
  message
}

displayMessage()