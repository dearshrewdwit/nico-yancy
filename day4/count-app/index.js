// 3 elements on the page
// number displays the count
// button to increase it by 1
// button to decrease by 1



let count = 0

// grab the parent element from the html page
const appElement = document.getElementById('app')

// create the element that shows the count
const countElement = document.createElement("P")
countElement.innerText = count

// create skeleton of an up button element
const upButton = document.createElement("BUTTON")
// give it some text
upButton.innerText = "+"

// what happens when I click on the up button
upButton.addEventListener("click", function() {
  count++
  countElement.innerText = count
})

// create const
const downButton = document.createElement("BUTTON")
downButton.innerText = "-"
downButton.addEventListener("click", function() {
  if (count >= 1) { count-- }
  countElement.innerText = count
})


const inputElement = document.createElement("INPUT")
inputElement.setAttribute("type", "text");

// add selectors and other attributes
// inputElement.setAttribute("id", "text-input");
// inputElement.setAttribute("class", "input-field");

const textButton = document.createElement("BUTTON")
textButton.innerText = "save!"
textButton.addEventListener("click", function() {
  countElement.innerText = inputElement.value
})

appElement.appendChild(countElement)
appElement.appendChild(upButton)
appElement.appendChild(downButton)
appElement.appendChild(inputElement)
appElement.appendChild(textButton)
