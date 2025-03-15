let sectionIndex = 0;
let scrollCount = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;
const scrollThreshold = 5;
const scrollCooldown = 500;
let lastScrollTime = 0;
const stickyHeader = document.querySelector(".sticky-header");

// Function to control scrolling speed
function scrollHandler(event) {
    const now = new Date().getTime();
    if (now - lastScrollTime < scrollCooldown) return;

    scrollCount++;

    if (scrollCount >= scrollThreshold) {
        scrollCount = 0;
        if (event.deltaY > 0 && sectionIndex < totalSections - 1) {
            sectionIndex++;
        } else if (event.deltaY < 0 && sectionIndex > 0) {
            sectionIndex--;
        }

        document.querySelector(".container").scrollTo({
            top: sections[sectionIndex].offsetTop,
            behavior: "smooth"
        });

        updateActiveSection();
        lastScrollTime = now;
    }
}

// Function to show/hide the sticky header
function handleScroll() {
    stickyHeader.style.opacity = window.scrollY > window.innerHeight * 0.8 ? "1" : "0";
}

// Function to update active section
function updateActiveSection() {
    sections.forEach((section, index) => {
        section.classList.toggle("active", index === sectionIndex);
    });
}

window.addEventListener("wheel", scrollHandler);
window.addEventListener("scroll", handleScroll);
