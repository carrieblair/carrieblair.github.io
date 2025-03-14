let sectionIndex = 0;
let scrollCount = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;
const scrollThreshold = 5;
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
    if (window.scrollY > window.innerHeight * 0.8) {
        stickyHeader.style.opacity = "1"; // Show when scrolling down
    } else {
        stickyHeader.style.opacity = "0"; // Hide in Section 1
    }
}

// Function to update active section
function updateActiveSection() {
    sections.forEach((section, index) => {
        section.classList.toggle("active", index === sectionIndex);
    });
}

window.addEventListener("wheel", scrollHandler);
window.addEventListener("scroll", handleScroll);
const slideshow = document.getElementById("slideshow");
const images = [
    "images/IMG_2486.JPEG",
    "images/IMG_5050.JPEG",
    "images/IMG_8563.JPEG",
    "images/IMG_3984.jpg",
    "images/cow"
];

let currentIndex = 0;

function changeImage() {
    // Fade out
    slideshow.style.opacity = "0";

    setTimeout(() => {
        // Change the image source
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.src = images[currentIndex];

        // Fade in
        slideshow.style.opacity = "1";
    }, 1000); // Matches fade-out transition time
}

// Change image every 4 seconds
setInterval(changeImage, 5000);