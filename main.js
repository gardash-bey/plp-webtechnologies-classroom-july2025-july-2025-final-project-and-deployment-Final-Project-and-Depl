// Main JavaScript for Gardash Portfolio

document.addEventListener('DOMContentLoaded', function () {
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');
    if (navToggle && navUl) {
        navToggle.addEventListener('click', function () {
            navUl.classList.toggle('open');
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('form-message');
            let valid = true;
            let msg = '';
            if (!name) {
                valid = false;
                msg += 'Name is required. ';
            }
            if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                valid = false;
                msg += 'Valid email is required. ';
            }
            if (!message) {
                valid = false;
                msg += 'Message is required.';
            }
            if (valid) {
                formMessage.textContent = 'Thank you for your message!';
                formMessage.style.color = 'green';
                contactForm.reset();
            } else {
                formMessage.textContent = msg;
                formMessage.style.color = 'red';
            }
        });
    }

    // Gallery image click (lightbox effect)
    const galleryImgs = document.querySelectorAll('.gallery-img');
    if (galleryImgs.length > 0) {
        galleryImgs.forEach(img => {
            img.addEventListener('click', function () {
                const overlay = document.createElement('div');
                overlay.className = 'lightbox-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = 0;
                overlay.style.left = 0;
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
                overlay.style.background = 'rgba(0,0,0,0.8)';
                overlay.style.display = 'flex';
                overlay.style.alignItems = 'center';
                overlay.style.justifyContent = 'center';
                overlay.style.zIndex = 1000;
                const bigImg = document.createElement('img');
                bigImg.src = img.src;
                bigImg.alt = img.alt;
                bigImg.style.maxWidth = '90vw';
                bigImg.style.maxHeight = '90vh';
                bigImg.style.borderRadius = '10px';
                overlay.appendChild(bigImg);
                overlay.addEventListener('click', function () {
                    document.body.removeChild(overlay);
                });
                document.body.appendChild(overlay);
            });
        });
    }
});
