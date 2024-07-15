/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("hello").style.opacity = 1;
    }, 0);
    setTimeout(function() {
        document.getElementById("i-am").style.display = "inline";
        document.getElementById("i-am").style.opacity = 1;
    }, 1000);
    setTimeout(function() {
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").style.opacity = 1;
    }, 2000);
    setTimeout(function() {
        document.getElementById("subtitle").style.display = "block";
        document.getElementById("subtitle").style.opacity = 1;
    }, 3000);
    setTimeout(function() {
        document.getElementById("portfolio-button").style.display = "inline-block";
        document.getElementById("portfolio-button").style.opacity = 1;
    }, 4000);
});
