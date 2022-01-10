/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// our Global variables for  container and each section
const navBar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
let navItems = "";


/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//the project title
const title = document.querySelector("title");
title.textContent="Landing Page Project";
// build the nav
/*building the nav according to dom methods for sections and assumed navigation bar
and adding scroll into
*/
// Adding the Arrow function and IIFE function Expression as suggested
// Also fixing scrollIntoView Element
const liElement = document.createDocumentFragment();
(function myNavBar() {

  sections.forEach(section => {

    let navItems = document.createElement('li');
    navItems.textContent = "section";
    liElement.appendChild(navItems);
    navItems.innerHTML= `<a class="menu__link" href="#section" >
          ${section.dataset.nav}</a>`;
    navItems.addEventListener("click", () => {
      section.scrollIntoView({behavior: "smooth", block: "center"});
  });
});
navBar.appendChild(liElement);

})();
/*
// Adding Id attributes to create an active navBar
const lists = document.querySelectorAll("li");
for(let i = 0; i <lists.length; i++){
  lists[i].setAttribute("id", "myId"+[i+1]);
}*/
// Add class 'active' to section when near top of viewport

//Adding active class and color style while scrolling

window.addEventListener('scroll', toggleActiveState);

function addActiveClass(section) {

  let id = section.getAttribute('id');
  document.querySelector(`#${id}`).classList.add('your-active-class');
  document.querySelector(`#${id}`).style.backgroundColor = 'red';

}

//Removin the active class
function removeActiveClass(section) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
  let id = section.getAttribute('id');
  document.querySelector(`#${id}`).classList.remove('your-active-class');
  document.querySelector(`#${id}`).style.backgroundColor = 'inherit';
  }

//putting classes into action
function toggleActiveState() {
  sections.forEach((section) => {
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
//
    let view = section.getBoundingClientRect();
    if (view.top <= 200 && view.bottom >= 200) {
      addActiveClass(section);

        } else {
      removeActiveClass(section);
    }
  });
}
//
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
