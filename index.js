console.log("Hello World")

const redBox = document.querySelector('.resize-box')
const xAxis = document.getElementById('x-axis')

const widthInput = document.getElementById('width')

widthInput.addEventListener('keyup', () => {

  let isTooBig = false;
  const userX = 
    document.getElementById('resize-box').offsetLeft
  
  let width = Number (
    document.querySelector('#width').value
  )

  const widthGreen = document.querySelector('.box-holder').offsetWidth

  console.log(typeof userX)
  console.log(userX, width, widthGreen);

  if (userX + width > widthGreen) {
    console.log("Inside if statement");
    width = widthGreen - userX;
    isTooBig = true;
  }

redBox.style.left = userX + "px";
redBox.style.width = width + "px"; 

if (isTooBig){
  alert('AH!!! TOO BIG! STAY IN THE LINES!')
}

})



xAxis.addEventListener('keyup', () => {
  //create variable for user input 
  let isTooBig = false;
  const userX = Number(
    document.getElementById('x-axis').value
  )
  let widthRed = document.querySelector('.resize-box').offsetWidth

  const widthGreen = document.querySelector('.box-holder').offsetWidth

  console.log(userX, widthRed, widthGreen);
  if (userX + widthRed > widthGreen) {
    console.log("Inside if statement");
    widthRed = widthGreen - userX;
    isTooBig = true;
  }

redBox.style.left = userX + "px";
redBox.style.width = widthRed + "px"; 

if (isTooBig){
  alert('AH!!! TOO BIG! STAY IN THE LINES!')
}
})


