// Toggle theme
const themeToggleBtn = document.getElementById('toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Save theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
