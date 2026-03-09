/**
 * ProtectWithBri.com — Main JavaScript
 * Nav scroll, mobile menu, accordion, form, reveal, sticky CTA
 */

(function () {
  'use strict';

  // ─── Nav Scroll ───────────────────────────────────────────────────────────
  const nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // ─── Hamburger / Mobile Menu ──────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      mobileMenu.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('hidden', '');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });

  // ─── Accordion (FAQ) ──────────────────────────────────────────────────────
  const accordionTriggers = document.querySelectorAll('.accordion__trigger');

  accordionTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const bodyId = this.getAttribute('aria-controls');
      const body = document.getElementById(bodyId);

      // Close all others
      accordionTriggers.forEach(function (other) {
        if (other !== trigger) {
          other.setAttribute('aria-expanded', 'false');
          var otherId = other.getAttribute('aria-controls');
          var otherBody = document.getElementById(otherId);
          if (otherBody) otherBody.setAttribute('hidden', '');
        }
      });

      // Toggle current
      if (expanded) {
        this.setAttribute('aria-expanded', 'false');
        body.setAttribute('hidden', '');
      } else {
        this.setAttribute('aria-expanded', 'true');
        body.removeAttribute('hidden');
      }
    });
  });

  // ─── Scroll Reveal ────────────────────────────────────────────────────────
  function setupScrollReveal() {
    // Attach .reveal class to key elements
    var revealSelectors = [
      '.section-label',
      '.section-heading',
      '.section-sub',
      '.who-card',
      '.service-card',
      '.trust-card',
      '.step',
      '.meet-bri__card',
      '.accordion',
      '.consult-form',
      '.trust-bullets',
    ];

    revealSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.classList.add('reveal');
        // Stagger cards
        if (i > 0 && i < 5) {
          el.classList.add('reveal--delay-' + i);
        }
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // Only apply scroll reveal if user hasn't requested reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setupScrollReveal();
  } else {
    // Make everything visible immediately for reduced motion
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── Form Submission ──────────────────────────────────────────────────────
  var form = document.getElementById('consult-form');
  var formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      var nameInput = document.getElementById('full-name');
      var emailInput = document.getElementById('email');
      var isValid = true;

      [nameInput, emailInput].forEach(function (input) {
        if (!input.value.trim()) {
          input.style.borderColor = '#e07070';
          input.setAttribute('aria-invalid', 'true');
          isValid = false;
        } else {
          input.style.borderColor = '';
          input.removeAttribute('aria-invalid');
        }
      });

      if (!isValid) return;

      // Email format check
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.style.borderColor = '#e07070';
        emailInput.setAttribute('aria-invalid', 'true');
        return;
      }

      // Simulate form submit (replace with real backend / Netlify / Formspree etc.)
      var submitBtn = document.getElementById('form-submit');
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      setTimeout(function () {
        form.style.display = 'none';
        formSuccess.removeAttribute('hidden');
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 900);
    });

    // Clear custom validation on input
    form.querySelectorAll('input').forEach(function (input) {
      input.addEventListener('input', function () {
        this.style.borderColor = '';
        this.removeAttribute('aria-invalid');
      });
    });
  }

  // ─── Sticky CTA (Mobile) ─────────────────────────────────────────────────
  var stickyCta = document.getElementById('sticky-cta');
  var consultationSection = document.getElementById('consultation');
  var footerEl = document.getElementById('footer');

  function updateStickyCta() {
    if (!stickyCta || window.innerWidth > 768) {
      if (stickyCta) {
        stickyCta.classList.remove('visible');
        stickyCta.setAttribute('aria-hidden', 'true');
      }
      return;
    }

    var consultRect = consultationSection.getBoundingClientRect();
    var footerRect = footerEl.getBoundingClientRect();

    // Hide sticky CTA when the consultation section or footer is visible
    if (consultRect.top < window.innerHeight || footerRect.top < window.innerHeight) {
      stickyCta.classList.remove('visible');
      stickyCta.setAttribute('aria-hidden', 'true');
    } else {
      stickyCta.classList.add('visible');
      stickyCta.setAttribute('aria-hidden', 'false');
    }
  }

  window.addEventListener('scroll', updateStickyCta, { passive: true });
  window.addEventListener('resize', updateStickyCta, { passive: true });
  updateStickyCta();

  // ─── Smooth scroll polyfill nudge for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
