// Maluti TVET College — main.js

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Contact form submission handler
const form = document.querySelector('.form-box');
if (form) {
    const button = form.querySelector('.btn-primary');
    if (button) {
        button.addEventListener('click', function () {
            const name = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');

            if (name && email && name.value.trim() && email.value.trim()) {
                alert('Thank you, ' + name.value + '! Your message has been received. We will contact you shortly.');
                form.querySelectorAll('input, textarea, select').forEach(function (el) {
                    el.value = '';
                });
            } else {
                alert('Please fill in your name and email address before submitting.');
            }
        });
    }
}