document.addEventListener('DOMContentLoaded', function () {
    // Toggle button functionality
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.getElementById('navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Smooth scrolling for navbar links
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close the navbar after clicking a link on small devices
        if (window.innerWidth <= 768) {
            navbar.classList.remove('show');
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});



const sliderWrapper = document.querySelector('.slider-wrapper');
const reviewCards = document.querySelectorAll('.review-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentIndex = 0;
console.log(currentIndex)
function updateSliderPosition() {
    const cardWidth = reviewCards[0].offsetWidth + 20; // Include margin
    sliderWrapper.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < reviewCards.length - 1) {
        currentIndex++;
        updateSliderPosition();
    
    }
  
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }

});

window.addEventListener('resize', updateSliderPosition);


document.getElementById("aout-section").addEventListener("click", () => {
    let subNav = document.getElementById("sub-nav")
   
    if (window.innerWidth < 767) {
        if (subNav.style.display === 'block') {
            subNav.style.display = 'none';
        } else {
            subNav.style.display = 'block';
        }
    }

})