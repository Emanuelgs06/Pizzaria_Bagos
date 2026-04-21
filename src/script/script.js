// MENU BURGUER
const headerContainer = document.querySelector(".header__container")
const toggle = document.querySelector(".header__toggle")
const nav = document.querySelector(".nav")
    
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("ativa")
        nav.classList.toggle("ativa")
        headerContainer.classList.toggle("ativa")
    
    })

// NAV OCULT 
const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("ativa");
            toggle.classList.remove("ativa")
            headerContainer.classList.remove("ativa");

        })
    });