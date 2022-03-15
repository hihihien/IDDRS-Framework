// owl carousel with dots and buttons
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

// show and hide module
$(function() {
  $('.frame-box').click(function() {
    $('.targetDiv').not('#GroupName' + $(this).attr('name')).hide();
    $('#GroupName' + $(this).attr('name')).toggle();
  });
});
// show and hide Summary
$(function() {
  $('.showSum').click(function() {
    $('.expand-wrap').not('#sum' + $(this).attr('name')).hide();
    $('#sum' + $(this).attr('name')).toggle();
  });
});





// show and hide Summary
// function showSummary(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }


// show and hide modules
// function showModule3(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }

// function showModule1(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }

// function showModule2(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }
// function showModule4(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }
// function showModule5(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }
// function showModule6(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }

// show selected module
// function ShowRadioButtonDiv (a, NumberOfLevels) {
//   for (x=1;x<=NumberOfLevels;x++) {
//       SelectLevel = a + x;
//       ThisLevel = a + x +'Div';
//   if (document.getElementById(SelectLevel).checked) {
//       document.getElementById(ThisLevel).style.display = "block";
//       }
//   else {
//       document.getElementById(ThisLevel).style.display = "none";
//       }
//   }
//   return false;
// }




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
