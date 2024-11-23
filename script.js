// Observer callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the entry is intersecting
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class to trigger the animation
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
};

// Create an Intersection Observer with a threshold
const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.3
});

// Select all sections to observe
const sections = document.querySelectorAll('section');

// Start observing each section
sections.forEach(section => {
    observer.observe(section);
});


function _(element){
   return document.querySelector(element);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target element ID
        const targetElement = document.querySelector(targetId); // Select the target element

        if (targetElement) {
            // Add highlight class to the target element
            targetElement.classList.add('highlight');

            // Set a timeout to add fade-out class after 2 seconds
            setTimeout(() => {
                targetElement.classList.add('fade-out'); // Add fade-out class to start fading out

                // Remove highlight and fade-out classes after fade-out completes
                setTimeout(() => {
                    targetElement.classList.remove('highlight', 'fade-out'); // Remove both classes
                }, 500); // Match this duration with the fade-out animation duration
            }, 2000); // Wait 2 seconds before starting to fade out
        }

        // Scroll smoothly to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

