var acc = document.getElementsByClassName("accordion");
var p;

for (p = 0; p < acc.length; p++) {
  acc[p].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function openModal() {
  document.getElementById("myModal").style.display = "block"
}

function closeModal() {
  document.getElementById("myModal").style.display = "none"
}

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("demo")
  var captionText = document.getElementById("caption")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  // moved caption to figure
  // captionText.innerHTML = dots[slideIndex - 1].alt
}

function reloadScrollBars() {
  document.documentElement.style.overflow = "auto" // firefox, chrome
  document.body.scroll = "yes" // ie only
}

function unloadScrollBars() {
  document.documentElement.style.overflow = "hidden" // firefox, chrome
  document.body.scroll = "no" // ie only
}

function myFunction() {
  var x = document.getElementById("main-nav")
  if (x.className === "nav-menu") {
    x.className += " responsive"
  } else {
    x.className = "nav-menu"
  }
}

