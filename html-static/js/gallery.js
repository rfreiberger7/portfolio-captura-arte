// ==============================================
// GALLERY PAGE JAVASCRIPT
// ==============================================

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initLightbox();
    initBackButton();
});

// ==============================================
// GALLERY
// ==============================================
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!galleryGrid) return;
    
    // Todas as imagens organizadas por categoria
    const portfolioImages = {
        gestante: [
            'img/gestante.jpg',
            'img/milk-bath-gestante.jpg'
        ],
        feminino: [
            'img/feminino.jpg',
            'img/feminino-1.jpg',
            'img/feminino-4.jpg',
            'img/feminino-5.jpg',
            'img/feminino-13.jpg',
            'img/feminino-15.jpg'
        ],
        mesversario: [
            'img/mesversario.jpg',
            'img/mesversario-2.jpg',
            'img/mesversario-4.jpg',
            'img/mesversario-98.jpg',
            'img/mesversario-109.jpg',
            'img/mesversario-146.jpg'
        ],
        formatura: [
            'img/formatura.jpg',
            'img/formatura-4.jpg'
        ],
        newborn: [
            'img/newborn-4.jpg',
            'img/newborn-17.jpg',
            'img/newborn-25.jpg',
            'img/newborn-28.jpg'
        ],
        profissional: [
            'img/profissional.jpg',
            'img/profissional-5.jpg',
            'img/profissional-6.jpg',
            'img/profissional-7.jpg',
            'img/profissional-8.jpg'
        ],
        preWedding: [
            'img/pre-wedding.jpg',
            'img/pre-wedding-2.jpg',
            'img/pre-wedding-3.jpg'
        ],
        smash: [
            'img/smash.jpg',
            'img/smash-8.jpg',
            'img/smash-10.jpg',
            'img/smash-24.jpg',
            'img/smash-26.jpg'
        ]
    };
    
    // Criar array de items para a galeria
    const portfolioItems = [];
    Object.keys(portfolioImages).forEach(category => {
        portfolioImages[category].forEach((img, idx) => {
            portfolioItems.push({
                id: `${category}-${idx}`,
                image: img,
                title: getCategoryTitle(category),
                category: category
            });
        });
    });
    
    function getCategoryTitle(category) {
        const titles = {
            'gestante': 'Gestante',
            'feminino': 'Feminino',
            'mesversario': 'Mesversário',
            'formatura': 'Formatura',
            'newborn': 'Newborn',
            'profissional': 'Profissional',
            'preWedding': 'Ensaio Pré Wedding',
            'smash': 'Smash'
        };
        return titles[category] || category;
    }
    
    function renderGallery(category = 'all') {
        const filteredItems = category === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === category);
        
        galleryGrid.innerHTML = '';
        
        filteredItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.style.animationDelay = `${index * 0.01}s`;
            div.innerHTML = `<img src="${item.image}" alt="${item.title} - Foto ${index + 1}" loading="lazy">`;
            div.addEventListener('click', () => openLightbox(item, filteredItems));
            galleryGrid.appendChild(div);
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            renderGallery(this.value);
        });
    }
    
    renderGallery();
    
    // Expor para uso global
    window.galleryData = { portfolioItems, renderGallery };
}

// ==============================================
// LIGHTBOX
// ==============================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentItems = [];
    let currentIndex = 0;
    
    window.openLightbox = function(item, items) {
        currentItems = items;
        currentIndex = items.findIndex(i => i.id === item.id);
        showImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    function showImage() {
        if (currentItems[currentIndex]) {
            lightboxImage.src = currentItems[currentIndex].image;
            lightboxImage.alt = currentItems[currentIndex].title;
        }
    }
    
    function closeModal() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (closeLightbox) {
        closeLightbox.addEventListener('click', closeModal);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeModal();
            }
        });
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
            showImage();
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % currentItems.length;
            showImage();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
            showImage();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % currentItems.length;
            showImage();
        }
    });
}

// ==============================================
// BACK BUTTON
// ==============================================
function initBackButton() {
    const backBtn = document.getElementById('backBtn');
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Se veio de outra página do site, volta
            if (document.referrer && document.referrer.includes(window.location.origin)) {
                window.history.back();
            } else {
                // Caso contrário, vai para a home
                window.location.href = 'index.html';
            }
        });
    }
}