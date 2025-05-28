function toggleMenu() {
    // a function to toggle or untoggle the menu and icon state

    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    } else {
        menu.classList.add('open');
        icon.classList.add('open');
    }
}

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

let slideIndex = [1, 1];
let slideId = ["slide-1", "slide-2"];
let dotId = ["dot-1", "dot-2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);

    if (n > x.length) { slideIndex[no] = 1 } // to the first slide
    if (n < 1) { slideIndex[no] = x.length } // to the last slide

    // hide all slides and remove active class from dots
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // show the current slide and add active class to the corresponding dot
    x[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no] - 1].className += " active";
}