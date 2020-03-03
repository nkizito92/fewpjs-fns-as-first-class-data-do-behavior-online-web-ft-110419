/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const time = new Date('March 13, 08 01:00').getHours()
const hours = new Date('March 13, 08 12:00').getHours()
function greet() {
  if(time < hours) {
    return "Good Morning";
  } else if (time >= hours && time <= hours){
    return "Good Afternoon";
  } else if (time > hours) {
    return "Good Evening";
  }
} 

greet()

function displayMessage() {}