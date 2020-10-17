// var element = document.getElementsByClassName("loading__start");

// function fadeOut(elem, ms) {
//     if (!elem)
//         return;

//     if (ms) {
//         var opacity = 1;
//         var timer = setInterval(function () {
//             opacity -= 50 / ms;
//             if (opacity <= 0) {
//                 clearInterval(timer);
//                 opacity = 0;
//                 elem.style.display = "none";
//                 elem.style.visibility = "hidden";
//             }
//             elem.style.opacity = opacity;
//             elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
//         }, 50);
//     } else {
//         elem.style.opacity = 0;
//         elem.style.filter = "alpha(opacity=0)";
//         elem.style.display = "none";
//         elem.style.visibility = "hidden";
//     }
// }


// fadeOut(element, 600);
gsap.to(".loading__start", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});
