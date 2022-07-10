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


function beginJS() {
    // build the nav
    const navBar = document.getElementById("navbar__list");
    const sectionNames = document.querySelectorAll("section");
    
    for (let i=0; i<sectionNames.length; i++) {
        const listItem = document.createElement('li');
        const listAnchor = document.createElement('a');
        const listContent = document.createTextNode(sectionNames[i].childNodes[1].childNodes[1].textContent);
        
        listAnchor.appendChild(listContent);
        listAnchor.classList.add("menu__link");
        listAnchor.setAttribute("href", "#"+sectionNames[i].id);
        listItem.appendChild(listAnchor);
        
        navBar.appendChild(listItem);
    }

    
    const links = document.querySelectorAll(".navbar__menu .menu__link");
    
    let previous = 0;

    for (let i=0; i<links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
            //console.log("event cleard");
            
            /*sectionNames[previous].classList.remove("your-active-class");
            sectionNames[i].classList.add("your-active-class");
            previous  = i;*/

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"
            })
            //console.log("scrolled");
        });

        

        document.addEventListener('scroll', function (event) {
            event.preventDefault();
            const rect = sectionNames[i].getBoundingClientRect();
            if (rect['bottom'] >= -50 && rect['top'] <= 50) {
                sectionNames[previous].classList.remove("your-active-class");
                sectionNames[i].classList.add("your-active-class");
                previous  = i;
            }

            /*navBar.style.display = "none";
            setTimeout(() => {navBar.style.display = "block";}, 1500);*/
        });
    }

    /*function update() {
      const rect = sectionNames[previous].getBoundingClientRect();
    
      //container.innerHTML = '';
      for (let key in rect) {
        if(typeof rect[key] !== 'function') {
          let para = document.createElement('p');
          para.textContent  = `${ key } : ${ rect[key] }`;
          container.appendChild(para);
        }
      }
    }
    
    document.addEventListener('scroll', update);
    update();*/
    
    
}

const startingTime = performance.now();

document.addEventListener('DOMContentLoaded', beginJS);

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
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