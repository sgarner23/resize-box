console.log("Hello World")

let redBox = document.querySelector('.resize-box')
let xAxis = document.getElementById('x-axis')
const heightInput = document.getElementById('height')
let yAxis = document.getElementById('y-axis')


const widthInput = document.getElementById('width')

/////////////////width box///////////////////////
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
redBox.style.width = (width - 3) + "px"; 

if (isTooBig){
  alert('AH!!! TOO BIG! STAY IN THE LINES!')
}

})


////////////////x-axis/////////////////////////////
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
    console.log("Inside if statement test");
    widthRed = widthGreen - userX ;
    isTooBig = true;
  }

redBox.style.left = userX + "px";
redBox.style.width = widthRed + "px"; 

if (isTooBig){
  alert('AH!!! TOO BIG! STAY IN THE LINES!')
}
})

/////////////height box/////////////////////////

heightInput.addEventListener('keyup', () => {
  let isTooBig = false;
  let widthRed = document.querySelector('.resize-box').offsetWidth
  const userX = Number(
    document.getElementById('x-axis').value
  )
  const userY = Number(
    document.getElementById('y-axis').value
  )
  let newHeight = Number (
      document.getElementById('height').value
  
    )

  const heightGreen = document.querySelector('.box-holder').offsetHeight

 
  if (userY + newHeight > heightGreen) {
    newHeight = heightGreen - userY ;
    isTooBig = true;
  }

redBox.style.top = userY + "px";
redBox.style.left = userX + "px";
redBox.style.height = (newHeight - 3) + "px"; 
redBox.style.width = widthRed + "px"; 

if (isTooBig){
  alert('AH!!! TOO BIG! STAY IN THE LINES!')

}


})

//////////////y-axis/////////////////////////

yAxis.addEventListener('keyup', () => {
  let isTooBig = false;
  let widthRed = document.querySelector('.resize-box').offsetWidth
  const userX = Number(
    document.getElementById('x-axis').value
  )
  const userY = Number(
    document.getElementById('y-axis').value
  )
  let heightRed = document.querySelector('.resize-box').offsetHeight

  const heightGreen = document.querySelector('.box-holder').offsetHeight

 
  if (userY + heightRed > heightGreen) {
    heightRed = heightGreen - userY ;
    isTooBig = true;
  }

redBox.style.top = userY + "px";
redBox.style.left = userX + "px";
redBox.style.height = heightRed + "px"; 
redBox.style.width = widthRed + "px"; 

if (isTooBig){
  alert('AH!!! TOO BIG! STAY IN THE LINES!')
}
})





