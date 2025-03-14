let sectionIndex = 0;
let scrollCount = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;
const scrollThreshold = 3; // Number of scrolls before switching
const container = document.querySelector(".container");

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

        // Scroll to the selected section smoothly
        container.scrollTo({
            top: sections[sectionIndex].offsetTop,
            behavior: "smooth"
        });
    }
}

// Add event listener for scrolling
window.addEventListener("wheel", scrollHandler);
