// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.from(".animate-title", {
    opacity: 0,
    y: 100,
    scale: 0.7,
    duration: 2,
    ease: "power4.out"
});
gsap.from(".animate-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1.8,
    delay: 0.4,
    ease: "power4.out"
});

// About animations
gsap.from(".animate-image", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    },
    opacity: 0,
    x: -150,
    duration: 2,
    ease: "power4.out"
});
gsap.from(".animate-text", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    },
    opacity: 0,
    x: 150,
    duration: 2,
    ease: "power4.out"
});

// Project cards animation
gsap.from(".animate-card", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%"
    },
    opacity: 0,
    y: 100,
    scale: 0.8,
    duration: 1.5,
    stagger: 0.3,
    ease: "power4.out"
});

// Contact icons animation
gsap.from(".animate-icons a", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    rotation: 360,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// Smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        gsap.to(window, {
            scrollTo: targetElement,
            duration: 1.8,
            ease: "power4.out"
        });
    });
});

// Particle effect (softer and smoother)
function createParticles(containerId) {
    const container = document.getElementById(containerId);
    function addParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 5 + 3 + 's';
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
    }
    setInterval(addParticle, 100);
}

createParticles('particle-container');
createParticles('particle-container-projects');

// Enhanced cursor trail
const trail = [];
document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'particle';
    dot.style.position = 'absolute';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.background = 'linear-gradient(45deg, #00f7ff, #ff00ff)';
    dot.style.width = '8px';
    dot.style.height = '8px';
    document.body.appendChild(dot);
    trail.push(dot);
    if (trail.length > 30) {
        const oldDot = trail.shift();
        oldDot.remove();
    }
    gsap.to(dot, {
        scale: 0.1,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        onComplete: () => dot.remove()
    });
});

// Ripple effect on cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        card.appendChild(ripple);
        gsap.to(ripple, {
            scale: 10,
            opacity: 0,
            duration: 1.8,
            ease: "power4.out",
            onComplete: () => ripple.remove()
        });
    });
});
