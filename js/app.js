/*Main Function to be executed */
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

    //build the collapse buttons
    for (let i=0; i<sectionNames.length; i++) {
        const htmlTextToAdd = '<button class="collapsible">'+sectionNames[i].childNodes[1].childNodes[1].textContent+'</button>';
        sectionNames[i].insertAdjacentHTML('beforebegin', htmlTextToAdd);
    }

    const sectionBtns = document.querySelectorAll('.collapsible');
    for (let i=0; i<sectionBtns.length; i++) {
        sectionBtns[i].addEventListener('click', function () {
            
            sectionNames[i].style.display = (sectionNames[i].style.display == "block") ? 
                sectionNames[i].style.display = "none" : sectionNames[i].style.display = "block"; 

        });
    }
    
    //Adds Scroll Functionality
    const links = document.querySelectorAll(".navbar__menu .menu__link");
    
    let previous = 0;

    for (let i=0; i<links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"
            })
        });

        

        document.addEventListener('scroll', function (event) {
            event.preventDefault();
            const rect = sectionNames[i].getBoundingClientRect();
            if (rect['bottom'] >= -50 && rect['top'] <= 50) {
                sectionNames[previous].classList.remove("your-active-class");
                sectionNames[i].classList.add("your-active-class");
                previous  = i;
            }

        });
    }

    //Back to Top menu
    const header = document.querySelector('h1');
    const button = document.getElementById('myBtn');
    button.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector(this.childNodes[0].getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    });

    //Active state class
    document.addEventListener('scroll', function (event) {
        const headRect = header.getBoundingClientRect();
        event.preventDefault();
        if (headRect['bottom'] < -50) {
            button.style.display = "block";
            navBar.style.display = "block";
            setTimeout(() => {navBar.style.display = "none";}, 1500);
        } else {
            button.style.display = "none";           
        }

 
        


    });

}

/* Testing Performance*/

const startingTime = performance.now();

// Checks the DOM is ready first
document.addEventListener('DOMContentLoaded', beginJS);

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');