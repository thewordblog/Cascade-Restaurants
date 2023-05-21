// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header'); 
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);




// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');


// Check to see if there is a theme preference in local Storage, if so add the light theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});


var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // Wrap around to the first slide if reaching the end
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and remove active class from dots
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Show current slide and set active class for corresponding dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

var dots = document.getElementsByClassName("dot");

// Create the dots dynamically based on the number of slides
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var dotIndex = Array.prototype.indexOf.call(dots, this);
    currentSlide(dotIndex);
  });



function automateScrolling() {
    const slides = document.querySelectorAll('.product-slide');
    const interval = 2000; // Set the interval time in milliseconds (e.g., 2000ms = 2 seconds)
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
  
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, interval);
  }
  
  document.addEventListener('DOMContentLoaded', automateScrolling);

  // Smooth scrolling function
  function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var scrollAmount = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth scrolling effect
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Attach click event listeners to the navigation links
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      var duration = 1000; // Adjust duration (in milliseconds) as desired
      smoothScroll(target, duration);
    });
  });

}
