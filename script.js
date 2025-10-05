// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.team-card, .news-card, .merch-card, .ticket-card').forEach(card => {
    observer.observe(card);
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

// Floating animation for gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Particle effect on button click
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        for(let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #FFD700;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top + rect.height/2}px;
                animation: explode 0.6s ease-out forwards;
            `;
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 600);
        }
    });
});

const explodeStyle = document.createElement('style');
explodeStyle.textContent = `
    @keyframes explode {
        to {
            transform: translate(${Math.random()*200-100}px, ${Math.random()*200-100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(explodeStyle);

// Merchandise Add to Cart
document.querySelectorAll('.merch-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.merch-title').textContent;
        alert(`${productName} has been added to your cart!`);
    });
});

// Ticket Buy Now
document.querySelectorAll('.ticket-btn').forEach(button => {
    button.addEventListener('click', function() {
        const ticketType = this.closest('.ticket-card').querySelector('.ticket-type').textContent;
        alert(`You have selected ${ticketType} tickets. Redirecting to payment...`);
    });
});

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
});

// Floating Action Button
document.querySelector('.fab-main').addEventListener('click', function() {
    document.querySelector('.fab-container').classList.toggle('active');
});

// Poll Animation
document.querySelector('.poll-vote-btn').addEventListener('click', function() {
    const bars = document.querySelectorAll('.poll-fill');
    bars.forEach(bar => {
        const currentWidth = parseInt(bar.style.width);
        const newWidth = Math.min(currentWidth + Math.random() * 10, 100);
        bar.style.width = newWidth + '%';
        bar.parentElement.nextElementSibling.textContent = 
            bar.parentElement.nextElementSibling.textContent.replace(/\d+%/, Math.round(newWidth) + '%');
    });
    this.textContent = 'Thanks for voting!';
    setTimeout(() => {
        this.textContent = 'Vote Now';
    }, 2000);
});

// Social Card Interactions
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('click', function() {
        const platform = this.classList[1];
        alert(`Opening ${platform} post...`);
    });
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Typing Effect for Hero Text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect
setTimeout(() => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        typeWriter(heroTitle, 'Mumbai Indians', 150);
    }
}, 2000);

// Schedule Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// Player Profile Interactions
document.querySelectorAll('.player-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const playerName = this.closest('.player-profile').querySelector('h3').textContent;
        alert(`Opening detailed profile for ${playerName}...`);
    });
});

// Fan Zone Interactions
document.querySelector('.play-btn').addEventListener('click', function() {
    this.textContent = this.textContent === '▶️' ? '⏸️' : '▶️';
    alert(this.textContent === '⏸️' ? 'Playing MI Anthem...' : 'Paused');
});

document.querySelector('.upload-btn').addEventListener('click', function() {
    alert('Photo upload feature coming soon!');
});

document.querySelector('.chat-btn').addEventListener('click', function() {
    alert('Joining MI Paltan chat room...');
});

// Match Ticket Buttons
document.querySelectorAll('.match-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Redirecting to ticket booking...');
    });
});

// Advanced Features for Professional Development

// Live Match Updates Simulation
function updateLiveScore() {
    const ticker = document.querySelector('.ticker-content');
    const updates = [
        '🏏 LIVE: MI 145/3 (15.2 overs) vs RCB - Rohit 67* batting',
        '🔥 WICKET! Bumrah strikes again - RCB 89/4',
        '⚡ SIX! Hardik Pandya smashes it out of the park!',
        '🎯 MI need 23 runs from 18 balls - Exciting finish ahead!'
    ];
    
    setInterval(() => {
        const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
        ticker.innerHTML = `<span>${randomUpdate}</span>`;
    }, 8000);
}

// Initialize live updates
updateLiveScore();

// Performance Analytics Dashboard
function initAnalytics() {
    const analytics = {
        pageViews: 0,
        userEngagement: 0,
        popularSections: ['team', 'schedule', 'fanzone']
    };
    
    // Track page interactions
    document.addEventListener('click', () => {
        analytics.userEngagement++;
        console.log('User Engagement Score:', analytics.userEngagement);
    });
    
    // Track section visits
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Section viewed:', entry.target.id);
            }
        });
    });
    
    sections.forEach(section => sectionObserver.observe(section));
}

initAnalytics();

// Advanced Navigation with Breadcrumbs
function updateBreadcrumb() {
    const currentSection = window.location.hash.replace('#', '') || 'home';
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'breadcrumb';
    breadcrumb.innerHTML = `
        <span>Home</span> > <span>${currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}</span>
    `;
    
    // Add breadcrumb styling
    const breadcrumbStyle = document.createElement('style');
    breadcrumbStyle.textContent = `
        .breadcrumb {
            position: fixed;
            top: 80px;
            left: 20px;
            background: rgba(0,75,160,0.9);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            z-index: 999;
            backdrop-filter: blur(10px);
        }
        .breadcrumb span:last-child {
            color: #FFD700;
        }
    `;
    document.head.appendChild(breadcrumbStyle);
    
    // Remove existing breadcrumb
    const existing = document.querySelector('.breadcrumb');
    if (existing) existing.remove();
    
    document.body.appendChild(breadcrumb);
}

// Update breadcrumb on navigation
window.addEventListener('hashchange', updateBreadcrumb);
updateBreadcrumb();

// Advanced Search Functionality
function initSearch() {
    const searchHTML = `
        <div class="search-container">
            <input type="text" id="siteSearch" placeholder="Search players, matches, news..." />
            <div class="search-results" id="searchResults"></div>
        </div>
    `;
    
    // Add search to navigation
    const nav = document.querySelector('.nav-links');
    nav.insertAdjacentHTML('afterend', searchHTML);
    
    // Search functionality
    const searchData = [
        { title: 'Rohit Sharma', type: 'Player', section: 'players' },
        { title: 'Jasprit Bumrah', type: 'Player', section: 'players' },
        { title: 'Match Schedule', type: 'Schedule', section: 'schedule' },
        { title: 'Team Statistics', type: 'Stats', section: 'stats' },
        { title: 'Fan Poll', type: 'Engagement', section: 'poll' },
        { title: 'Merchandise Store', type: 'Store', section: 'merchandise' }
    ];
    
    const searchInput = document.getElementById('siteSearch');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.type.toLowerCase().includes(query)
        );
        
        if (filtered.length > 0) {
            searchResults.innerHTML = filtered.map(item => 
                `<div class="search-result-item" data-section="${item.section}">
                    <strong>${item.title}</strong> - ${item.type}
                </div>`
            ).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });
    
    // Handle search result clicks
    searchResults.addEventListener('click', function(e) {
        if (e.target.classList.contains('search-result-item')) {
            const section = e.target.dataset.section;
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            searchResults.style.display = 'none';
            searchInput.value = '';
        }
    });
}

initSearch();

// Accessibility Enhancements
function enhanceAccessibility() {
    // Add ARIA labels
    document.querySelectorAll('.btn').forEach(btn => {
        if (!btn.getAttribute('aria-label')) {
            btn.setAttribute('aria-label', btn.textContent);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        if (e.key === 'Escape') {
            // Close any open modals or menus
            document.querySelector('.fab-container').classList.remove('active');
            document.querySelector('.search-results').style.display = 'none';
        }
    });
    
    // Focus indicators
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .keyboard-navigation *:focus {
            outline: 3px solid #FFD700 !important;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyle);
}

enhanceAccessibility();

// Performance Monitoring
function monitorPerformance() {
    // Page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Show performance badge
        if (loadTime < 3000) {
            const badge = document.createElement('div');
            badge.innerHTML = '⚡ Fast Loading';
            badge.style.cssText = `
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: #28a745;
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 0.8rem;
                z-index: 1000;
                animation: slideIn 0.5s ease-out;
            `;
            document.body.appendChild(badge);
            
            setTimeout(() => badge.remove(), 3000);
        }
    });
}

monitorPerformance();

// Professional Interactive Elements
function addProfessionalFeatures() {
    // Professional notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="close-btn">&times;</button>
        `;
        
        const notificationStyle = document.createElement('style');
        notificationStyle.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 30px;
                background: white;
                border-left: 4px solid #004BA0;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 10px;
                max-width: 350px;
                animation: slideInRight 0.3s ease-out;
            }
            .notification.success {
                border-left-color: #28a745;
            }
            .notification i {
                color: #004BA0;
                font-size: 1.2rem;
            }
            .notification.success i {
                color: #28a745;
            }
            .close-btn {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                margin-left: auto;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(notificationStyle);
        
        document.body.appendChild(notification);
        
        notification.querySelector('.close-btn').addEventListener('click', () => {
            notification.remove();
        });
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Professional scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #004BA0, #FFD700);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // Professional back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #004BA0;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0,75,160,0.3);
    `;
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showNotification('Scrolled to top', 'success');
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(backToTop);
    
    // Professional loading states
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                const originalText = this.textContent;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.textContent = originalText;
                }, 1500);
            }
        });
    });
}

addProfessionalFeatures();

// Feedback System
function initFeedbackSystem() {
    // Star rating functionality
    const stars = document.querySelectorAll('.star');
    let currentRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating);
        });
        
        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.rating);
            highlightStars(currentRating);
        });
    });
    
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    // Feedback form submission
    document.querySelector('.feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const feedback = this.querySelector('textarea').value;
        
        if (currentRating === 0) {
            alert('Please provide a star rating!');
            return;
        }
        
        if (feedback.trim() === '') {
            alert('Please share your feedback!');
            return;
        }
        
        // Simulate feedback submission
        alert(`Thank you for your ${currentRating}-star feedback! Your input helps us improve the MI Paltan experience.`);
        this.reset();
        stars.forEach(star => star.classList.remove('active'));
        currentRating = 0;
    });
    
    // Animate progress bars on scroll
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                });
            }
        });
    });
    
    const metricsSection = document.querySelector('.development-metrics');
    if (metricsSection) {
        progressObserver.observe(metricsSection);
    }
}

initFeedbackSystem();

// Professional Development Showcase
console.log('%c🏏 Mumbai Indians Website - ShadowFox Internship Project', 'color: #004BA0; font-size: 16px; font-weight: bold;');
console.log('%c✨ Demonstrating: Web Design, Development, UX/UI, Accessibility, Performance', 'color: #FFD700; font-size: 12px;');
console.log('%c🚀 Technologies: HTML5, CSS3, JavaScript ES6+, Responsive Design, Animations', 'color: #0066CC; font-size: 12px;');
console.log('%c💡 Features: Interactive Elements, Search, Analytics, Accessibility, Mobile-First', 'color: #28a745; font-size: 12px;');
console.log('%c🎯 Passion: Cricket, IPL, Mumbai Indians, Web Development Excellence', 'color: #dc3545; font-size: 12px;');
