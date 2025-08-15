document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeIcon.classList.toggle('fa-moon', isDark);
        themeIcon.classList.toggle('fa-sun', !isDark);
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // Sticky Header
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        backToTop.classList.toggle('active', window.scrollY > 300);
    });

    // Back to Top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close Mobile Menu on Link Click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Section Animations
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Cookie Consent
    const cookieConsent = document.querySelector('#cookieConsent');
    const acceptCookies = document.querySelector('#acceptCookies');
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    let autoSlideInterval;

    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    };

    const nextTestimonial = () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextTestimonial, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        stopAutoSlide();
        startAutoSlide();
    });

    document.querySelector('.testimonial-slider').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.testimonial-slider').addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();

    // Modal Handling
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const reportBtn = document.querySelector('.btn-report-leak');
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    const switchToSignup = document.querySelector('#switchToSignup');
    const switchToLogin = document.querySelector('#switchToLogin');

    const openModal = (modalId) => {
        document.querySelector(modalId).style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modals.forEach(modal => (modal.style.display = 'none'));
        document.body.style.overflow = 'auto';
    };

    reportBtn.addEventListener('click', () => openModal('#reportModal'));
    loginBtn.addEventListener('click', () => openModal('#loginModal'));
    signupBtn.addEventListener('click', () => openModal('#signupModal'));
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        openModal('#signupModal');
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        openModal('#loginModal');
    });

    closeModalButtons.forEach(btn => btn.addEventListener('click', closeModal));
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    });

    // Form Validation
    const forms = {
        contactForm: {
            fields: [
                { id: 'name', validate: (val) => val.trim().length > 2, error: 'Name must be at least 3 characters' },
                { id: 'email', validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), error: 'Invalid email address' },
                { id: 'phone', validate: (val) => !val || /^[0-9]{10}$/.test(val), error: 'Invalid phone number (10 digits)' },
                { id: 'message', validate: (val) => val.trim().length > 10, error: 'Message must be at least 10 characters' }
            ]
        },
        newsletterForm: {
            fields: [
                { id: 'newsletterEmail', validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), error: 'Invalid email address' }
            ]
        },
        reportForm: {
            fields: [
                { id: 'leakLocation', validate: (val) => val.trim().length > 5, error: 'Location must be at least 5 characters' },
                { id: 'leakType', validate: (val) => val !== '', error: 'Please select a leak type' },
                { id: 'leakSeverity', validate: (val) => val !== '', error: 'Please select severity' },
                { id: 'leakDescription', validate: (val) => !val || val.trim().length > 0, error: 'Description cannot be empty if provided' }
            ]
        },
        loginForm: {
            fields: [
                { id: 'loginEmail', validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), error: 'Invalid email address' },
                { id: 'loginPassword', validate: (val) => val.length >= 6, error: 'Password must be at least 6 characters' }
            ]
        },
        signupForm: {
            fields: [
                { id: 'signupName', validate: (val) => val.trim().length > 2, error: 'Name must be at least 3 characters' },
                { id: 'signupEmail', validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), error: 'Invalid email address' },
                { id: 'signupPhone', validate: (val) => /^[0-9]{10}$/.test(val), error: 'Invalid phone number (10 digits)' },
                { id: 'signupPassword', validate: (val) => val.length >= 6, error: 'Password must be at least 6 characters' },
                { id: 'signupConfirm', validate: (val, form) => val === form.querySelector('#signupPassword').value, error: 'Passwords do not match' },
                { id: 'signupLocation', validate: (val) => val !== '', error: 'Please select a location' },
                { id: 'agreeTerms', validate: (val, input) => input.checked, error: 'You must agree to the terms' }
            ]
        }
    };

    Object.keys(forms).forEach(formId => {
        const form = document.querySelector(`#${formId}`);
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            forms[formId].fields.forEach(field => {
                const input = form.querySelector(`#${field.id}`);
                const value = input.type === 'checkbox' ? input.checked : input.value;
                const valid = field.validate(value, form);

                const formGroup = input.closest('.form-group');
                const errorEl = formGroup ? formGroup.querySelector('.form-error') || document.createElement('div') : null;

                if (errorEl && !errorEl.classList.contains('form-error')) {
                    errorEl.classList.add('form-error');
                    formGroup.appendChild(errorEl);
                }

                if (!valid) {
                    isValid = false;
                    input.classList.add('error');
                    if (errorEl) errorEl.textContent = field.error;
                    errorEl.style.display = 'block';
                } else {
                    input.classList.remove('error');
                    if (errorEl) errorEl.style.display = 'none';
                }
            });

            if (isValid) {
                console.log(`${formId} submitted successfully`);
                form.reset();
                if (formId === 'reportForm' || formId === 'contactForm' || formId === 'newsletterForm') {
                    closeModal();
                    alert('Submission successful!');
                }
            }
        });

        // Real-time validation
        forms[formId].fields.forEach(field => {
            const input = form.querySelector(`#${field.id}`);
            if (!input) return;

            input.addEventListener('input', () => {
                const value = input.type === 'checkbox' ? input.checked : input.value;
                const valid = field.validate(value, form);

                const formGroup = input.closest('.form-group');
                const errorEl = formGroup ? formGroup.querySelector('.form-error') || document.createElement('div') : null;

                if (errorEl && !errorEl.classList.contains('form-error')) {
                    errorEl.classList.add('form-error');
                    formGroup.appendChild(errorEl);
                }

                if (!valid) {
                    input.classList.add('error');
                    if (errorEl) errorEl.textContent = field.error;
                    errorEl.style.display = 'block';
                } else {
                    input.classList.remove('error');
                    if (errorEl) errorEl.style.display = 'none';
                }
            });
        });
    });

    // Photo Preview for Report Form
    const leakPhotoInput = document.querySelector('#leakPhoto');
    const photoPreview = document.querySelector('#photoPreview');
    leakPhotoInput.addEventListener('change', () => {
        const file = leakPhotoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photoPreview.innerHTML = `<img src="${e.target.result}" alt="Leak Preview">`;
            };
            reader.readAsDataURL(file);
        } else {
            photoPreview.innerHTML = '';
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            faqQuestions.forEach(q => {
                q.parentElement.classList.remove('active');
            });

            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});