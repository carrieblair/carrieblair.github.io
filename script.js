let sectionIndex = 0;
let scrollCount = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;
const scrollThreshold = 3;
const container = document.querySelector(".container");

// Function to apply fade effects
function updateActiveSection() {
    sections.forEach((section, index) => {
        if (index === sectionIndex) {
            section.classList.add("active");  // Fade in active section
        } else {
            section.classList.remove("active"); // Fade out others
        }
    });
}

// Initial activation of first section
sections[0].classList.add("active");

function scrollHandler(event) {
    scrollCount++;

    if (scrollCount >= scrollThreshold) {
        scrollCount = 0;

        if (event.deltaY > 0 && sectionIndex < totalSections - 1) {
            sectionIndex++;
        } else if (event.deltaY < 0 && sectionIndex > 0) {
            sectionIndex--;
        }

        // Scroll to section
        container.scrollTo({
            top: sections[sectionIndex].offsetTop,
            behavior: "smooth"
        });

        // Apply fade effects
        updateActiveSection();
    }
}

// Add event listener for scrolling
window.addEventListener("wheel", scrollHandler);
