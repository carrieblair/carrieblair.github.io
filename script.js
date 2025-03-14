let sectionIndex = 0;
let scrollCount = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;
const scrollThreshold = 3; // How many scrolls before changing sections

function scrollHandler(event) {
    scrollCount++;

    if (scrollCount >= scrollThreshold) {
        scrollCount = 0; // Reset scroll count

        if (event.deltaY > 0) {
            // Scroll Down
            if (sectionIndex < totalSections - 1) sectionIndex++;
        } else {
            // Scroll Up
            if (sectionIndex > 0) sectionIndex--;
        }

        gsap.to(window, { duration: 1, scrollTo: sections[sectionIndex] });
    }
}

// Add event listener for mouse wheel
window.addEventListener("wheel", scrollHandler);
