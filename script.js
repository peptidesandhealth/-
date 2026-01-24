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
    initCatalogModal();
    initConsultationModal();
});

// ========================================
// Navbar Scroll Effect
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
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
