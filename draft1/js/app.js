// owl carousel with dots
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: ["<i class='align arrow' id='prev'></i>",
    "<i <i class='align arrow' id='next'></i>"],
    slideBy: 5,
    items: 4,
    margin: 0,
  }

  );
});







// swipe arrow carousel
// const gap = 46;
// const carousel = document.getElementById("carousel"),
//     content = document.getElementById("content1"),
//     next = document.getElementById("next"),
//     prev = document.getElementById("prev");


// next.addEventListener("click", e => {
//     carousel.scrollBy(width + gap, 0);
//     if (carousel.scrollWidth !== 0) {
//       prev.style.display = "flex";
//     }
//     if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//       next.style.display = "flex";
//     }
//   });
//   prev.addEventListener("click", e => {
//     carousel.scrollBy(-(width + gap), 0);
//     if (carousel.scrollLeft - width - gap <= 0) {
//       prev.style.display = "flex";
//     }
//     if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//       next.style.display = "flex";
//     }
//   });
  
//   let width = carousel.offsetWidth;
//   window.addEventListener("resize", e => (width = carousel.offsetWidth));
