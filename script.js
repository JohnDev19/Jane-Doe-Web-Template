        document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });

            const nav = document.querySelector('nav');
            const sections = document.querySelectorAll('.section');
            const goToTop = document.querySelector('.go-to-top');

            nav.addEventListener('click', (e) => {
                if (e.target.tagName === 'I') {
                    e.preventDefault();
                    const targetId = e.target.parentElement.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    goToTop.classList.add('show');
                } else {
                    goToTop.classList.remove('show');
                }
            });

            goToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            const form = document.querySelector('.contact-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message. I will get back to you soon!');
                form.reset();
            });
        });