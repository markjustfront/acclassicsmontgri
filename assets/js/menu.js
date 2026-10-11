// assets/js/menu.js - Mobile Hamburger Menu
// The nav is inserted later by fetch(), so listen on the document
// instead of looking for the button when the page first loads.

function setMenu(open) {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;
    hamburger.classList.toggle('active', open);
    navLinks.classList.toggle('active', open);
    document.body.classList.toggle('menu-open', open);
}

function markCurrentPage() {
    const page = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        const target = decodeURIComponent(a.getAttribute('href') || '');
        a.classList.toggle('current', target === page);
    });
}

document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;

    if (e.target.closest('#hamburger')) {
        setMenu(!navLinks.classList.contains('active'));
        markCurrentPage();
        return;
    }

    // Close when a link is tapped, or when tapping outside the open menu
    if (e.target.closest('.nav-links a') ||
        (navLinks.classList.contains('active') && !e.target.closest('#nav-links'))) {
        setMenu(false);
    }
});

// Close with the Escape key, and if the screen is resized to desktop
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 768) setMenu(false); });
