// sticky
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
        sticky.removeClass('sticky');
    } else {
        sticky.addClass('sticky');
    }
});

// open nav
function toggleNav() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
    var menuIcon = document.querySelector(".mobile-menu span");
    menuIcon.textContent = menuIcon.textContent === "☰" ? "×" : "☰";
}

(function ($) {
    'use strict';

     //Service list Home One
    $('.service-list-1').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots:false,
        nav:true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600:{
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 

    


})(jQuery);

