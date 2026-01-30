// ========================================
// Portfolio Website - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initParallaxEffects();
    initFAQ();
    initSkillsCarousel();
    initStatsCarousel();
    initPhotoBanner();
    initCatalogModal();
    initConsultationModal();
    initLanguageSwitcher();
});

// ========================================
// Language Translations
// ========================================
const translations = {
    ru: {
        // Navigation
        'nav.standards': 'Стандарты',
        'nav.directions': 'Направления',
        'nav.consultation': 'Консультация',
        'nav.shop': 'Магазин',
        'nav.contacts': 'Контакты',

        // Hero
        'hero.subtitle': 'КЛЮЧ К СОВРЕМЕННОМУ ОЗДОРОВЛЕНИЮ',
        'hero.tagline': 'Инновационные решения в рамках комплексного подхода к здоровью и восстановлению',
        'hero.shopBtn': 'Перейти в магазин',
        'hero.consultBtn': 'Получить консультацию',

        // About
        'about.title': 'СТАНДАРТЫ',
        'about.lead': 'Оценка • Подбор • Поддержка',
        'about.stat1.title': 'Стандарты качества',
        'about.stat1.label': 'чистота состава • контроль партии • верификация',
        'about.stat2.title': 'Комплексный подход',
        'about.stat2.label': 'сон • стресс • восстановление • метаболизм',
        'about.stat3.title': 'Полное сопровождение',
        'about.stat3.label': 'рекомендации • поддержка • обратная связь',

        // Skills - Directions List
        'skills.title': 'НАПРАВЛЕНИЯ',
        'skills.item1.title': 'Восстановление и регенерация',
        'skills.item1.tags': 'травмы • регенерация • восстановление • адаптация',
        'skills.item2.title': 'Опорно-двигательный аппарат',
        'skills.item2.tags': 'суставы • связки • сухожилия • мобильность',
        'skills.item3.title': 'Кожа и дермальные структуры',
        'skills.item3.tags': 'коллаген • эластичность • плотность • сияние',
        'skills.item4.title': 'Сон и стресс-нагрузка',
        'skills.item4.tags': 'сон • стресс • регуляция • устойчивость',
        'skills.item5.title': 'Иммунная поддержка',
        'skills.item5.tags': 'иммунитет • защита • адаптация • восстановление',
        'skills.item6.title': 'Метаболический профиль',
        'skills.item6.tags': 'метаболизм • энергия • чувствительность • контроль',

        // Consultation
        'consultation.title': 'КОНСУЛЬТАЦИЯ',
        'consultation.step1.title': 'Заявка',
        'consultation.step1.desc': 'Оставляете обращение',
        'consultation.step2.title': 'Сбор данных',
        'consultation.step2.desc': 'Цель и особенности',
        'consultation.step3.title': 'Подбор',
        'consultation.step3.desc': 'Выбор направления',
        'consultation.step4.title': 'Рекомендации',
        'consultation.step4.desc': 'Структура курса',
        'consultation.step5.title': 'Сопровождение',
        'consultation.step5.desc': 'Ответы и поддержка',
        'consultation.ctaBtn': 'Получить консультацию',

        // Shop
        'shop.title': 'МАГАЗИН',
        'shop.subtitle': 'Подбор и оформление заказа — в рамках консультационного сопровождения.',
        'shop.badge.recovery': 'Восстановление',
        'shop.badge.skin': 'Кожа',
        'shop.badge.metabolism': 'Метаболизм',
        'shop.bpc157.desc': 'Поддержка регенеративных процессов',
        'shop.ghkcu.desc': 'Комплексное омоложение и качество кожи',
        'shop.motsc.desc': 'Метаболический профиль и энергия',
        'shop.detailsBtn': 'Подробнее',
        'shop.catalogBtn': 'Открыть каталог',
        'shop.consultBtn': 'Получить консультацию',

        // FAQ
        'faq.q1.question': 'Что такое пептиды?',
        'faq.q1.answer': 'Пептиды — биологически активные соединения (короткие цепочки аминокислот), участвующие в регуляции клеточных процессов. В рамках консультации мы объясняем, какие направления поддержки могут быть актуальны под вашу задачу.',
        'faq.q2.question': 'Нужна ли консультация перед применением?',
        'faq.q2.answer': 'Да. Консультация позволяет корректно определить цель, учесть индивидуальные особенности и подобрать оптимальное направление в рамках комплексного подхода.',
        'faq.q3.question': 'Какие задачи можно рассмотреть в рамках сопровождения iPeptides?',
        'faq.q3.answer': 'Наиболее частые запросы: восстановление, качество кожи, стресс-нагрузка и сон, поддержка иммунитета, метаболический профиль и общий ресурс.',
        'faq.q4.question': 'Когда можно ожидать результат?',
        'faq.q4.answer': 'Сроки зависят от исходного состояния, выбранного направления и длительности курса. Мы ориентируемся на постепенную динамику и понятные критерии оценки.',
        'faq.q5.question': 'Можно ли совмещать пептидные решения с другими средствами?',
        'faq.q5.answer': 'Совместимость зависит от индивидуальных факторов. На консультации мы уточняем текущие препараты и подбираем корректный формат сопровождения.',
        'faq.q6.question': 'Как получить консультацию?',
        'faq.q6.answer': 'Оставьте заявку на сайте или напишите в мессенджер. Мы уточним ваш запрос и предложим подходящий формат консультации.',
        'faq.ctaBtn': 'Получить консультацию',

        // Contact
        'contact.title': 'КОНТАКТЫ',
        'contact.telegram': 'TELEGRAM-ЧАТ',
        'contact.hours': 'РЕЖИМ СВЯЗИ',
        'contact.hoursValue': 'Ежедневно 10:00–20:00',
        'contact.form.name': 'Имя и Фамилия',
        'contact.form.phone': 'Номер телефона',
        'contact.form.consent': 'Я согласен на обработку моих персональных данных',
        'contact.form.submit': 'Записаться на консультацию',

        // Footer
        'footer.copyright': '© 2024 iPeptides. Все права защищены.',
        'footer.disclaimer': 'Информация на сайте носит ознакомительный характер и не является медицинской рекомендацией. Решения принимаются индивидуально по итогам консультации.'
    },
    en: {
        // Navigation
        'nav.standards': 'Standards',
        'nav.directions': 'Directions',
        'nav.consultation': 'Consultation',
        'nav.shop': 'Shop',
        'nav.contacts': 'Contacts',

        // Hero
        'hero.subtitle': 'THE KEY TO MODERN WELLNESS',
        'hero.tagline': 'Innovative solutions within a comprehensive approach to health and recovery',
        'hero.shopBtn': 'Go to Shop',
        'hero.consultBtn': 'Get Consultation',

        // About
        'about.title': 'STANDARDS',
        'about.lead': 'Assessment • Selection • Support',
        'about.stat1.title': 'Quality Standards',
        'about.stat1.label': 'composition purity • batch control • verification',
        'about.stat2.title': 'Comprehensive Approach',
        'about.stat2.label': 'sleep • stress • recovery • metabolism',
        'about.stat3.title': 'Full Support',
        'about.stat3.label': 'recommendations • support • feedback',

        // Skills - Directions List
        'skills.title': 'DIRECTIONS',
        'skills.item1.title': 'Recovery & Regeneration',
        'skills.item1.tags': 'injuries • regeneration • recovery • adaptation',
        'skills.item2.title': 'Musculoskeletal System',
        'skills.item2.tags': 'joints • ligaments • tendons • mobility',
        'skills.item3.title': 'Skin & Dermal Structures',
        'skills.item3.tags': 'collagen • elasticity • density • radiance',
        'skills.item4.title': 'Sleep & Stress Load',
        'skills.item4.tags': 'sleep • stress • regulation • resilience',
        'skills.item5.title': 'Immune Support',
        'skills.item5.tags': 'immunity • protection • adaptation • recovery',
        'skills.item6.title': 'Metabolic Profile',
        'skills.item6.tags': 'metabolism • energy • sensitivity • control',

        // Consultation
        'consultation.title': 'CONSULTATION',
        'consultation.step1.title': 'Request',
        'consultation.step1.desc': 'Submit your inquiry',
        'consultation.step2.title': 'Data Collection',
        'consultation.step2.desc': 'Goals and specifics',
        'consultation.step3.title': 'Selection',
        'consultation.step3.desc': 'Direction choice',
        'consultation.step4.title': 'Recommendations',
        'consultation.step4.desc': 'Course structure',
        'consultation.step5.title': 'Support',
        'consultation.step5.desc': 'Answers and assistance',
        'consultation.ctaBtn': 'Get Consultation',

        // Shop
        'shop.title': 'SHOP',
        'shop.subtitle': 'Product selection and ordering — as part of consultation support.',
        'shop.badge.recovery': 'Recovery',
        'shop.badge.skin': 'Skin',
        'shop.badge.metabolism': 'Metabolism',
        'shop.bpc157.desc': 'Regenerative process support',
        'shop.ghkcu.desc': 'Comprehensive rejuvenation and skin quality',
        'shop.motsc.desc': 'Metabolic profile and energy',
        'shop.detailsBtn': 'Learn More',
        'shop.catalogBtn': 'Open Catalog',
        'shop.consultBtn': 'Get Consultation',

        // FAQ
        'faq.q1.question': 'What are peptides?',
        'faq.q1.answer': 'Peptides are biologically active compounds (short amino acid chains) involved in cellular process regulation. During consultation, we explain which support directions may be relevant to your needs.',
        'faq.q2.question': 'Is consultation required before use?',
        'faq.q2.answer': 'Yes. Consultation allows correct goal definition, considering individual characteristics and selecting the optimal direction within a comprehensive approach.',
        'faq.q3.question': 'What tasks can be addressed with iPeptides support?',
        'faq.q3.answer': 'Most common requests: recovery, skin quality, stress load and sleep, immune support, metabolic profile and overall resources.',
        'faq.q4.question': 'When can results be expected?',
        'faq.q4.answer': 'Timing depends on initial condition, chosen direction and course duration. We focus on gradual progress and clear evaluation criteria.',
        'faq.q5.question': 'Can peptide solutions be combined with other products?',
        'faq.q5.answer': 'Compatibility depends on individual factors. During consultation, we review current medications and select the appropriate support format.',
        'faq.q6.question': 'How to get a consultation?',
        'faq.q6.answer': 'Submit a request on the website or message us. We will clarify your inquiry and suggest the appropriate consultation format.',
        'faq.ctaBtn': 'Get Consultation',

        // Contact
        'contact.title': 'CONTACTS',
        'contact.telegram': 'TELEGRAM CHAT',
        'contact.hours': 'CONTACT HOURS',
        'contact.hoursValue': 'Daily 10:00–20:00',
        'contact.form.name': 'Full Name',
        'contact.form.phone': 'Phone Number',
        'contact.form.consent': 'I consent to the processing of my personal data',
        'contact.form.submit': 'Book a Consultation',

        // Footer
        'footer.copyright': '© 2024 iPeptides. All rights reserved.',
        'footer.disclaimer': 'Information on this website is for informational purposes only and does not constitute medical advice. Decisions are made individually based on consultation results.'
    }
};

// Current language state
let currentLanguage = localStorage.getItem('ipeptides-lang') || 'ru';

// ========================================
// Language Switcher
// ========================================
function initLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (!switcher) return;

    // Set initial state
    updateLanguageUI(currentLanguage);
    applyTranslations(currentLanguage);

    // Handle click
    switcher.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        localStorage.setItem('ipeptides-lang', currentLanguage);
        updateLanguageUI(currentLanguage);
        applyTranslations(currentLanguage);

        // Update html lang attribute
        document.documentElement.lang = currentLanguage;
    });
}

function updateLanguageUI(lang) {
    const options = document.querySelectorAll('.lang-option');
    options.forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// ========================================
// Navbar Scroll Effect - transparent on hero, solid after
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    let lastScroll = 0;

    // Calculate threshold: when to switch from transparent to solid
    const getScrollThreshold = () => {
        if (hero) {
            // Switch to solid when hero is mostly scrolled out of view
            return hero.offsetHeight - 100;
        }
        return 100;
    };

    const updateNavbar = () => {
        const currentScroll = window.pageYOffset;
        const threshold = getScrollThreshold();

        // Add/remove scrolled class based on hero visibility
        if (currentScroll > threshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    };

    // Initial check
    updateNavbar();

    // Update on scroll
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // Update threshold on resize
    window.addEventListener('resize', updateNavbar, { passive: true });
}

// ========================================
// Mobile Menu Toggle (Burger menu on all screens)
// ========================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (menuBtn && navLinks) {
        // Toggle menu on burger click
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (navOverlay) navOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking overlay (outside menu panel)
        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        }

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// ========================================
// Smooth Scrolling
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Scroll Animations (Fade In)
// ========================================
function initScrollAnimations() {
    // Add fade-in class to elements
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-text, .stat-item, .skill-card, ' +
        '.portfolio-item, .contact-info, .contact-form'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Stagger animation for grid items
    const gridItems = document.querySelectorAll('.skill-card, .portfolio-item, .stat-item');
    gridItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ========================================
// Contact Form Handling
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Get form data
            const formData = {
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
                message: form.querySelector('#message').value
            };

            // Validate
            if (!validateForm(formData)) {
                return;
            }

            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            try {
                await simulateFormSubmission(formData);

                // Success
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--ice-flow)';
                form.reset();

                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);

            } catch (error) {
                // Error
                submitBtn.textContent = 'Error! Try Again';
                submitBtn.style.background = '#ff6b6b';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
        showNotification('Please enter your name', 'error');
        return false;
    }

    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email', 'error');
        return false;
    }

    if (!data.message.trim()) {
        showNotification('Please enter a message', 'error');
        return false;
    }

    return true;
}

function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                console.log('Form submitted:', data);
                resolve();
            } else {
                reject(new Error('Submission failed'));
            }
        }, 1500);
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '12px',
        background: type === 'error' ? '#ff6b6b' : 'var(--ice-flow)',
        color: type === 'error' ? 'white' : 'var(--text-primary)',
        fontSize: '0.9rem',
        fontWeight: '500',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        zIndex: '9999',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    });

    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// Parallax Effects
// ========================================
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.hero-shape');

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.02;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;

            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ========================================
// Counter Animation for Stats
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        // Trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// ========================================
// Active Navigation Link Highlight
// ========================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', initActiveNavigation);

// ========================================
// Preloader (Optional)
// ========================================
function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('loaded');
            setTimeout(() => preloader.remove(), 500);
        }
    });
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ========================================
// Utility Functions
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll events for performance
const throttledScroll = throttle(() => {
    // Additional scroll handling if needed
}, 100);

window.addEventListener('scroll', throttledScroll);

// ========================================
// Skills Carousel
// ========================================
function initSkillsCarousel() {
    const carousel = document.querySelector('.skills-carousel');
    if (!carousel) return;

    const grid = carousel.querySelector('.skills-grid');
    const leftArrow = carousel.querySelector('.carousel-arrow-left');
    const rightArrow = carousel.querySelector('.carousel-arrow-right');

    if (!grid || !leftArrow || !rightArrow) return;

    // Get card width for scrolling
    const getScrollAmount = () => {
        const card = grid.querySelector('.skill-card');
        if (card) {
            return card.offsetWidth + 16; // card width + gap
        }
        return 300;
    };

    // Scroll left
    leftArrow.addEventListener('click', () => {
        grid.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    // Scroll right
    rightArrow.addEventListener('click', () => {
        grid.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    // Touch/swipe is already handled by CSS scroll-snap
}

// ========================================
// Stats Carousel (Mobile) - Dots Sync
// ========================================
function initStatsCarousel() {
    const statsContainer = document.querySelector('.about-stats');
    const dots = document.querySelectorAll('.stats-dot');
    const statItems = document.querySelectorAll('.about-stats .stat-item');

    if (!statsContainer || !dots.length || !statItems.length) return;

    // Update active dot based on scroll position
    const updateActiveDot = () => {
        const containerRect = statsContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        statItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.left + itemRect.width / 2;
            const distance = Math.abs(containerCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === closestIndex);
        });
    };

    // Listen to scroll events
    statsContainer.addEventListener('scroll', updateActiveDot, { passive: true });

    // Click on dots to scroll to corresponding card
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const targetItem = statItems[index];
            if (targetItem) {
                targetItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        });
    });

    // Initial update
    updateActiveDot();
}

// ========================================
// Photo Banner Scroll Animation
// ========================================
function initPhotoBanner() {
    const bannerInner = document.querySelector('.photo-banner-inner');
    if (!bannerInner) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bannerInner.classList.add('visible');
                // Once visible, no need to observe anymore
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    observer.observe(bannerInner);
}

// ========================================
// Catalog Modal
// ========================================
function initCatalogModal() {
    const modal = document.getElementById('catalogModal');
    const openBtn = document.getElementById('openCatalogBtn');
    const closeBtn = document.getElementById('closeCatalogBtn');
    const overlay = modal?.querySelector('.catalog-overlay');
    const searchInput = document.getElementById('catalogSearch');
    const filterChips = document.querySelectorAll('.filter-chip');
    const catalogCards = document.querySelectorAll('.catalog-card');
    const catalogEmpty = document.getElementById('catalogEmpty');
    const catalogGrid = document.getElementById('catalogGrid');
    const showcaseButtons = document.querySelectorAll('.btn-showcase');

    if (!modal || !openBtn) return;

    let currentFilter = 'all';
    let currentSearch = '';

    // Open modal
    function openModal() {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Filter cards
    function filterCards() {
        let visibleCount = 0;

        catalogCards.forEach(card => {
            const category = card.dataset.category;
            const name = card.dataset.name.toLowerCase();

            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            const matchesSearch = currentSearch === '' || name.includes(currentSearch.toLowerCase());

            if (matchesFilter && matchesSearch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Show/hide empty state
        if (catalogEmpty && catalogGrid) {
            if (visibleCount === 0) {
                catalogEmpty.style.display = 'block';
                catalogGrid.style.display = 'none';
            } else {
                catalogEmpty.style.display = 'none';
                catalogGrid.style.display = 'grid';
            }
        }
    }

    // Open button click
    openBtn.addEventListener('click', openModal);

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            filterCards();
        });
    }

    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update active state
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            // Update filter
            currentFilter = chip.dataset.filter;
            filterCards();
        });
    });

    // Showcase buttons - open modal with filter
    showcaseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const productName = btn.dataset.product;

            // Open modal
            openModal();

            // Set search to product name
            if (searchInput && productName) {
                searchInput.value = productName.toUpperCase();
                currentSearch = productName;
                filterCards();
            }
        });
    });

    // Card buttons - open product detail modal
    const cardButtons = document.querySelectorAll('.btn-card');
    cardButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.catalog-card');
            if (card) {
                openProductModal(card);
            }
        });
    });

    // Initialize product modal
    initProductModal();
}

// ========================================
// Product Detail Modal
// ========================================
function initProductModal() {
    const productModal = document.getElementById('productModal');
    const closeProductBtn = document.getElementById('closeProductBtn');
    const productOverlay = productModal?.querySelector('.product-overlay');
    const catalogModal = document.getElementById('catalogModal');

    if (!productModal) return;

    // Close product modal
    function closeProductModal() {
        productModal.classList.remove('active');
        // Don't remove modal-open if catalog is still open
        if (!catalogModal?.classList.contains('active')) {
            document.body.classList.remove('modal-open');
        }
    }

    // Close button
    if (closeProductBtn) {
        closeProductBtn.addEventListener('click', closeProductModal);
    }

    // Overlay click
    if (productOverlay) {
        productOverlay.addEventListener('click', closeProductModal);
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

// Open product modal with card data
function openProductModal(card) {
    const productModal = document.getElementById('productModal');
    const productTitle = document.getElementById('productTitle');
    const productBadge = document.getElementById('productBadge');
    const productDose = document.getElementById('productDose');
    const productFull = document.getElementById('productFull');

    if (!productModal || !card) return;

    // Get data from card
    const name = card.dataset.name || '';
    const dose = card.dataset.dose || '';
    const fullDesc = card.dataset.full || '';
    const badge = card.querySelector('.card-badge')?.textContent || '';

    // Populate modal
    if (productTitle) productTitle.textContent = name;
    if (productBadge) productBadge.textContent = badge;
    if (productDose) productDose.textContent = dose;

    // Format full description with paragraphs
    if (productFull) {
        const paragraphs = fullDesc.split('\n\n').filter(p => p.trim());
        productFull.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
    }

    // Show modal
    productModal.classList.add('active');
    document.body.classList.add('modal-open');
}

// ========================================
// Consultation Modal
// ========================================
function initConsultationModal() {
    const modal = document.getElementById('consultationModal');
    const closeBtn = document.getElementById('closeConsultationBtn');
    const overlay = modal?.querySelector('.consultation-modal-overlay');
    const form = document.getElementById('consultationModalForm');
    const triggers = document.querySelectorAll('.consultation-modal-trigger');
    const productModal = document.getElementById('productModal');
    const catalogModal = document.getElementById('catalogModal');

    if (!modal) return;

    // Open modal function
    function openConsultationModal() {
        // Close other modals first
        if (productModal?.classList.contains('active')) {
            productModal.classList.remove('active');
        }
        if (catalogModal?.classList.contains('active')) {
            catalogModal.classList.remove('active');
        }

        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }

    // Close modal function
    function closeConsultationModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Add click handlers to all trigger buttons
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openConsultationModal();
        });
    });

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeConsultationModal);
    }

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', closeConsultationModal);
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeConsultationModal();
        }
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Get form data
            const formData = {
                name: form.querySelector('#modalName').value,
                phone: form.querySelector('#modalPhone').value,
                email: form.querySelector('#modalEmail').value
            };

            // Show loading state
            submitBtn.textContent = 'Отправка...';
            submitBtn.disabled = true;

            // Simulate form submission
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Success
                submitBtn.textContent = 'Заявка отправлена!';
                submitBtn.style.background = 'var(--ice-flow)';
                form.reset();

                // Close modal and reset button after delay
                setTimeout(() => {
                    closeConsultationModal();
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2000);

            } catch (error) {
                // Error
                submitBtn.textContent = 'Ошибка! Попробуйте снова';
                submitBtn.style.background = '#ff6b6b';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }
}
