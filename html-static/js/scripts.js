// ==============================================
// STUDIO MANU FOTOGRAFIAS - MAIN JAVASCRIPT
// ==============================================

// Current year for footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    initNavbar();
    initHeroCarousel();
    initTestimonials();
});

// ==============================================
// NAVBAR
// ==============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    let lastScrollY = 0;
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
    
    // Hide/show navbar on scroll
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// ==============================================
// HERO CAROUSEL
// ==============================================
function initHeroCarousel() {
    const carouselContainer = document.getElementById('heroCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carouselContainer) return;
    
    // Imagens do carrossel (na ordem do arquivo images.ts)
    const images = [
        { src: 'img/feminino-1.jpg', title: 'Feminino', category: 'feminino' },
        { src: 'img/newborn-4.jpg', title: 'Newborn', category: 'newborn' },
        { src: 'img/mesversario-4.jpg', title: 'Mesversário', category: 'mesversario' },
        { src: 'img/profissional-5.jpg', title: 'Profissional', category: 'profissional' },
        { src: 'img/gestante.jpg', title: 'Gestante', category: 'gestante' },
        { src: 'img/smash-8.jpg', title: 'Smash', category: 'smash' },
        { src: 'img/feminino-4.jpg', title: 'Feminino', category: 'feminino' },
        { src: 'img/pre-wedding-2.jpg', title: 'Ensaio Pré Wedding', category: 'preWedding' },
        { src: 'img/mesversario-98.jpg', title: 'Mesversário', category: 'mesversario' },
        { src: 'img/newborn-17.jpg', title: 'Newborn', category: 'newborn' }
    ];
    
    let currentIndex = 0;
    
    // Renderizar slides
    function renderSlides() {
        carouselContainer.innerHTML = '';
        
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + images.length) % images.length;
            const item = images[index];
            
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.style.transform = `translateX(${i * 100}%) scale(${i === 0 ? 1 : 0.8})`;
            slide.style.zIndex = i === 0 ? 10 : 5;
            slide.style.opacity = i === 0 ? 1 : 0.5;
            
            slide.innerHTML = `
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="carousel-overlay">
                    <a href="#portfolio" class="carousel-title">${item.title}</a>
                </div>
            `;
            
            carouselContainer.appendChild(slide);
        }
        
        renderDots();
    }
    
    // Renderizar dots
    function renderDots() {
        dotsContainer.innerHTML = '';
        images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'dot' + (index === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${index + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = index;
                renderSlides();
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    // Navegação
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            renderSlides();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            renderSlides();
        });
    }
    
    // Auto-play
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        renderSlides();
    }, 5000);
    
    // Inicializar
    renderSlides();
}

// ==============================================
// TESTIMONIALS CAROUSEL
// ==============================================
function initTestimonials() {
    const testimonialText = document.getElementById('testimonialText');
    const testimonialName = document.getElementById('testimonialName');
    const testimonialStars = document.getElementById('testimonialStars');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (!testimonialText) return;
    
    const testimonials = [
        {
            id: 1,
            name: "Ana Silva",
            text: "Experiência incrível! As fotos ficaram perfeitas e capturaram exatamente o que queríamos transmitir.",
            rating: 5
        },
        {
            id: 2,
            name: "Carlos Mendes",
            text: "Profissionalismo impecável e resultado além das expectativas. Recomendo muito!",
            rating: 5
        },
        {
            id: 3,
            name: "Marina Santos",
            text: "A sensibilidade da Manu em capturar nossos momentos foi extraordinária. Fotos lindas e emocionantes!",
            rating: 5
        }
    ];
    
    let currentIndex = 0;
    
    function renderTestimonial() {
        const testimonial = testimonials[currentIndex];
        
        testimonialText.textContent = `"${testimonial.text}"`;
        testimonialName.textContent = testimonial.name;
        
        testimonialStars.innerHTML = '';
        for (let i = 0; i < testimonial.rating; i++) {
            testimonialStars.innerHTML += '★';
        }
        
        renderDots();
    }
    
    function renderDots() {
        dotsContainer.innerHTML = '';
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot' + (index === currentIndex ? ' active' : '');
            dot.addEventListener('click', () => {
                currentIndex = index;
                renderTestimonial();
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            renderTestimonial();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            renderTestimonial();
        });
    }
    
    renderTestimonial();
}