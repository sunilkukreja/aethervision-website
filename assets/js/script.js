document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navOverlay = document.querySelector('.mobile-nav-overlay');

    if (hamburger && navOverlay) {
        // Toggle menu on click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navOverlay.classList.toggle('active');
        });

        // Close menu when clicking anywhere else
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navOverlay.contains(e.target)) {
                hamburger.classList.remove('active');
                navOverlay.classList.remove('active');
            }
        });

        // Close menu when a link inside it is clicked
        const navLinks = navOverlay.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navOverlay.classList.remove('active');
            });
        });
    }

    // --- Random Continuous Slideshow Logic ---
    const slides = document.querySelectorAll('.hero-bg-img');
    
    // Only run if slides exist
    if (slides.length > 0) {
        let currentSlideIndex = -1;

        // Function to show a random slide
        function showRandomSlide() {
            // Pick a random index that is not the current one
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * slides.length);
            } while (newIndex === currentSlideIndex && slides.length > 1);

            // If there was a previous slide, remove active class
            if (currentSlideIndex !== -1) {
                slides[currentSlideIndex].classList.remove('active');
            }

            // Set new active slide
            slides[newIndex].classList.add('active');
            currentSlideIndex = newIndex;
        }

        // Initialize first slide immediately
        showRandomSlide();

        // Change slide every 6 seconds
        setInterval(showRandomSlide, 6000); 
    }
});