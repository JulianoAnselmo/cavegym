/* ============================================
   CAVE GYM — Dark Forge Cinema
   Premium JavaScript
   ============================================ */

(function() {
  'use strict';

  // ===== LOADER =====
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 800);
  });


  // ===== CUSTOM CURSOR =====
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (cursor && follower && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .mod-card, .diff, .unit, .test-card, .plan');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }


  // ===== HERO PARTICLE SYSTEM (Embers / Sparks) =====
  const canvas = document.getElementById('heroParticles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    function resizeCanvas() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Ember {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = h + 10;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 1.2 + 0.3);
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 150;
        this.hue = Math.random() * 30; // 0-30 = red to orange
      }
      update() {
        this.x += this.speedX + Math.sin(this.life * 0.02) * 0.3;
        this.y += this.speedY;
        this.life++;
        this.opacity = Math.max(0, this.opacity - (1 / this.maxLife));
        if (this.life > this.maxLife || this.y < -10) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, 50%, ${this.opacity})`;
        ctx.fill();
        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, 50%, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(60, Math.floor(w / 25));
    for (let i = 0; i < particleCount; i++) {
      const p = new Ember();
      p.y = Math.random() * h; // Start scattered
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    function animateParticles() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }


  // ===== HEADER SCROLL =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  }, { passive: true });


  // ===== MOBILE MENU =====
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('[data-mobile-link]');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const active = burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = active ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }


  // ===== SCROLL REVEAL =====
  const revealElements = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));


  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq').forEach(faq => {
    const btn = faq.querySelector('.faq__q');
    const answer = faq.querySelector('.faq__a');
    btn.addEventListener('click', () => {
      const isOpen = faq.classList.contains('active');
      // Close all
      document.querySelectorAll('.faq').forEach(f => {
        f.classList.remove('active');
        f.querySelector('.faq__a').style.maxHeight = null;
      });
      if (!isOpen) {
        faq.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });


  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = header.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });


  // ===== HERO PARALLAX =====
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        const opacity = 1 - (scrollY / (window.innerHeight * 0.7));
        const translate = scrollY * 0.3;
        heroContent.style.transform = `translateY(${translate}px)`;
        heroContent.style.opacity = Math.max(0, opacity);
      }
    }, { passive: true });
  }


  // ===== CARD TILT (Desktop) =====
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.diff, .plan, .test-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

})();
