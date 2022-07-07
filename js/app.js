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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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

// build the nav
const navBar = document.getElementById("navbar__list");
const sectionNames = document.querySelectorAll(".sectionsList");

for (let i=0; i<sectionNames.length; i++) {
    const listItem = document.createElement('li');
    const listAnchor = document.createElement('a');
    const listContent = document.createTextNode(sectionNames[i].getAttribute('data-nav'));
    
    listAnchor.appendChild(listContent);
    listAnchor.classList.add("menu__link");
    listAnchor.setAttribute("href", "#"+sectionNames[i].id);
    listItem.appendChild(listAnchor);

    navBar.appendChild(listItem);
}


const links = document.querySelectorAll(".navbar__menu .menu__link");

for (let i=0; i<links.length; i++) {
    links[i].addEventListener("click", function (event) {
        event.preventDefault();
        //console.log("event cleard");
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
        //console.log("scrolled");
    });
}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active