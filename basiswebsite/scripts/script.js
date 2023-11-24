var openButton = document.querySelector("header button");
var deNav = document.querySelector("nav");


openButton.onclick = openMenu;


function openMenu() {
  deNav.classList.add("open");
}

var sluitButton = document.querySelector("nav button")


sluitButton.onclick = sluitMenu;


function sluitMenu() {
  deNav.classList.remove("open")
}