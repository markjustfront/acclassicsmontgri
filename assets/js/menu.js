// assets/js/menu.js - Mobile Hamburger Menu
// The nav is inserted later by fetch(), so listen on the document
// instead of looking for the button when the page first loads.

document.addEventListener('click', (e) => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;

    if (e.target.closest('#hamburger')) {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        return;
    }

    // Close the menu when a link is tapped
    if (e.target.closest('.nav-links a')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
