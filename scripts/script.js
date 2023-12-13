var openButton = document.querySelector("header button")
var deNav = document.querySelector("body > nav")
var sluitButton = document.querySelector("body > nav button")
var checkBox = document.querySelector("input")
var caseText = document.querySelector("main > section:nth-of-type(1) h2")
var caseImage = document.querySelector("main > section:nth-of-type(1) img")
var clicked = false

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
    var deNav = document.querySelector("body > nav");
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

/* https://codepen.io/shooft/pen/abmLPwy */
/* regel 47 - 137 */
function createCarrousel(carrouselID) {
  let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
	
  function iniBolletjes() {
    for (bolletje of bolletjes) {
      bolletje.addEventListener("click", function(e){
				e.preventDefault();
				let newElement = carrousel.querySelector(this.hash);
        scrollToElement(newElement);
      });
    }
	}
  
	function iniArrowKeys() {
		carrousel.addEventListener('keydown', function(e) {
			if (e.code == "ArrowLeft") {			
				e.preventDefault();
				goToElement("previous");
			} 
			else if (e.code == "ArrowRight")  {			
				e.preventDefault();
				goToElement("next");
			}
		});    
  }
  
  function iniStartPosition() {
    carrouselElements[0].classList.add("current");
		bolletjes[0].classList.add("current");
    carrouselElementsContainer.scrollLeft = 0;
  }

  function goToElement(direction) {
    
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			newElement = currentElement.previousElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			newElement = currentElement.nextElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}
		scrollToElement(newElement);
  }

  function scrollToElement(newElement) {
    let carouselElementsContainer = newElement.closest("ul");

		let newElementOffset = newElement.offsetLeft;
		
		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});
    
    updateCurrentElement(newElement);

    updateBolletjes(newElement);
  }
  
	function updateCurrentElement(newElement) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		currentElement.classList.remove("current");
		newElement.classList.add("current");
	}

  function updateBolletjes(newElement){
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		currentBolletje.classList.remove("current");

    let newBolletje = carrousel.querySelector("a[href='#"+newElement.id+"']");
		newBolletje.classList.add("current");
  }

  iniBolletjes();	
  iniArrowKeys();	
  iniStartPosition();
}

(function() {
  createCarrousel("bolletjesAndArrowKeys");
})();