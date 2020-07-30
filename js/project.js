var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

    //////////////////////////////////////////////////////////////////////
    /////////////////////////////// dark mode ////////////////////////////
    /////////////////////////////////////////////////////////////////////

    // let theme = localStorage.getItem('theme');

    // let themeDots = document.getElementsByClassName('theme-dot');

    // if (theme == null) {
    //     setTheme('light');
    // } else {
    //     setTheme(theme);
    // }

    // for (var i = 0; themeDots.length > i; i++) {
    //     themeDots[i].addEventListener('click', function () {
    //         let mode = this.dataset.mode;
    //         setTheme(mode);
    //     })
    // }

    // function setTheme(mode) {
    //     if (mode == 'light') {
    //         document.getElementById('theme-style').href = '../css/styles-light.css';
    //         themeDots[0].classList.add("active");
    //         themeDots[1].classList.remove("active");
    //     }
    //     if (mode == 'dark') {
    //         document.getElementById('theme-style').href = '../css/styles-dark.css';
    //         themeDots[1].classList.add("active");
    //         themeDots[0].classList.remove("active");
    //     }

    //     localStorage.setItem('theme', mode);
    // }
