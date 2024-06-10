// Add event listener to hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show');
});

// Add event listener to links
document.querySelectorAll('.links').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(link.getAttribute('href').replace('#', '')).scrollIntoView({
            behavior: 'mooth'
        });
    });
});