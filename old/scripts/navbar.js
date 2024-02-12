const timeoutDuration = 200; // should match CSS transition
const scrollVerticalOffset = 40; // should match navbar size

const mobileMenu = document.querySelector(".navigation_links");
const menuIcon = document.querySelector(".navigation_menu-icon");
const blackout = document.querySelector(".navigation_blackout");
const languages = document.querySelector(".languages");


menuIcon?.addEventListener("mousedown", () => {
    toggleActive();

    menuIcon?.classList.toggle("reset-rotation");
    setTimeout(() => {
        menuIcon?.classList.remove("reset-rotation");
    }, timeoutDuration);
});

blackout?.addEventListener("mousedown", () => {
    removeActive();
});

// Smooth scrolling
document.querySelectorAll('.navigation_links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetPosition = targetSection.offsetTop - scrollVerticalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            removeActive();
        }
    });
});

function toggleActive() {
    mobileMenu?.classList.toggle("active");
    menuIcon?.classList.toggle("active");
    blackout?.classList.toggle("active");
    languages?.classList.toggle("active");
}

function removeActive() {
    mobileMenu?.classList.remove("active");
    menuIcon?.classList.remove("active");
    blackout?.classList.remove("active");
    languages?.classList.remove("active");
}

// Highlight active link
// window.addEventListener('scroll', () => {
//     let currentSection = '';

//     document.querySelectorAll('section').forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (scrollY >= (sectionTop - sectionHeight / 3)) {
//             currentSection = section.getAttribute('id');
//         }
//     });

//     document.querySelectorAll('.navigation_links a').forEach(link => {
//         link.classList.remove('highlighted'); // Remove the active class
//         if (link.getAttribute('href') === '#' + currentSection) {
//             link.classList.add('highlighted'); // Add the active class
//         }
//     });
// });
