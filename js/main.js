
/** navbar Toggler for mobile devices
 * it toggles b/n the class navBarListItems and showNavbarListItems
 */
const navToggle = document.getElementById("toggleBtn");
console.log(navToggle);
const listItems = document.querySelector(".navBarListItems");
console.log(listItems);
navToggle.addEventListener("click", function() {
  listItems.classList.toggle("showNavbarListItems");
});

/**
 * Gallery Image slider
 */

const galleryImages = document.querySelectorAll(".slideImgDiv");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

galleryImages.forEach(function (galleryImage, i) {
  galleryImage.style.left = `${i * 100}%`;
});

let j = 0;
nextBtn.addEventListener("click", function () {
  j++;
  galleryImgSlider();
});

prevBtn.addEventListener("click", function () {
  j--;
  galleryImgSlider();
});

function galleryImgSlider() {

  if (j < galleryImages.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (j > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  galleryImages.forEach(function (galleryImage) {
    galleryImage.style.transform = `translateX(-${j * 100}%)`;
  });
}

prevBtn.style.display = "none";
