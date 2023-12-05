var openButton = document.querySelector("header button")
var deNav = document.querySelector("nav")
var sluitButton = document.querySelector("nav button")
var checkBox = document.querySelector("input")
var caseText = document.querySelector("main > section:nth-of-type(1) h2")
var caseImage = document.querySelector("main > section:nth-of-type(1) img")
var clicked = false

// hamburger menu
openButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("open");
}


sluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("open")
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("open");
  }
}

function switchContent () {
  if (clicked === false) {
    caseText.textContent = "1:8 CAR CASE"
    caseImage.src = "images/carcase.jpg"
    clicked = true
  } else {
    caseText.textContent = "1:2 HELMET CASE"
    caseImage.src = "images/helmetcase.jpg"
    clicked = false
  }
}

checkBox.onclick = switchContent;