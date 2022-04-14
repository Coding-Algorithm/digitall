let header = document.querySelector("header");
let harmburger = document.querySelector(".harmburger");
let mobileNav = document.querySelector(".mobileNavContainer");
let closeHarmburger = document.querySelector(".closeHarmburger");
let testimonials = document.querySelectorAll(".testimonial");
let tCRight = document.querySelector(".tC .Right");
let tCLeft = document.querySelector(".tC .Left");
let testimonialsList = document.querySelector(".testimonialsList");
let ourWork = document.querySelectorAll(".ourWork");
let ourWorksList = document.querySelector(".ourWorksList");
let oCRight = document.querySelector(".oC .Right");
let oCLeft = document.querySelector(".oC .Left");
let services = document.querySelectorAll(".weDoThis")

testimonials = [...testimonials];
ourWork = [...ourWork];
services = [...services];

let totalLength = testimonialsList.offsetWidth * testimonials.length;

let ototalLength = ourWorksList.offsetWidth * ourWork.length;




function headerBackground() {
  if (window.scrollY >= 30) {
    header.style.backgroundColor = "white";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    header.style.backgroundColor = "rgba(0,0,0,0)";
    header.style.boxShadow = "";
  }
}

function openMenu() {
  mobileNav.classList.add("show");
}
function closeMenu() {
  mobileNav.classList.remove("show");
}

document.addEventListener("scroll", headerBackground);

closeHarmburger.addEventListener("click", closeMenu);
harmburger.addEventListener("click", openMenu);

let length = totalLength - testimonials[0].offsetWidth;

tCRight.addEventListener("click", () => {
  if (testimonials.length * testimonialsList.scrollLeft >= totalLength - 2) {
    testimonialsList.scrollLeft -= totalLength;
  } else {
    testimonialsList.scrollLeft += testimonials[0].offsetWidth;
  }
  console.log(testimonialsList.scrollLeft);
});

tCLeft.addEventListener("click", () => {
  if (testimonialsList.scrollLeft <= 0) {
    testimonialsList.scrollLeft += totalLength;
  } else {
    testimonialsList.scrollLeft -= testimonials[0].offsetWidth;
  }
});


oCRight.addEventListener("click", () => {
  if (ourWork.length * ourWorksList.scrollLeft >= ototalLength - 100) {
    ourWorksList.scrollLeft -= ototalLength;
  } else {
    ourWorksList.scrollLeft += ourWork[0].offsetWidth;
  }
  console.log(ourWorksList.scrollLeft * ourWork.length);
  console.log(totalLength);
  console.log(ototalLength);
});

oCLeft.addEventListener("click", () => {
  if (ourWorksList.scrollLeft <= 0) {
    ourWorksList.scrollLeft += ototalLength;
  } else {
    ourWorksList.scrollLeft -= ourWork[0].offsetWidth;
  }
});



// SETTING ANIMATION

function scroll(){
services.forEach(element => {
/*
const scrollInAt = (window.scrollY + window.innerHeight) - element.height / 2;
const elementBottom = element.offsetTop + element.height;
const isHalfShown = scrollInAt > element.offsetTop;
const isNotScrolledPast = window.scrollY < elementBottom;
*/
const top = element.offsetTop + element.offsetHeight/2;
const scrolled = window.scrollY; // window.innerHeight;
const elementBottom = element.offsetTop + element.offsetHeight;

const atTop = scrolled > top;
const notPassed = window.scrollY < (elementBottom + 500);

if(atTop && notPassed){
  element.classList.remove("hide");
  element.classList.add("slide");
}else{
  element.classList.add("hide");
  element.classList.remove("slide");
}
});
}


function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(scroll))