'use client';

/* ============================================================
   MADD AGENCY — Enhanced Animations
   Port of the old script.js. Page markup is server-rendered, so
   these effects attach to it after each navigation and clean up
   when the route changes.
   ============================================================ */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteEffects() {
  const pathname = usePathname();

  // ── Once per app load: fade-in, particles, spotlight, delegated UI ──
  useEffect(() => {
    document.body.classList.add('loaded');
    const cleanups = [initParticles(), initSpotlight(), initDelegatedUI()];
    return () => cleanups.forEach(fn => fn());
  }, []);

  // ── Per page: reveal animations, counters, hover effects ──
  useEffect(() => {
    const cleanups = [
      initHeroReveal(),
      initCounters(),
      initScrollReveal(),
      initCardStagger(),
      initTilt(),
      initMagnetic(),
      initRipple(),
      initAboutCounters(),
      initMarqueePause(),
    ];
    return () => cleanups.forEach(fn => fn && fn());
  }, [pathname]);

  return null;
}

// Small helper: add a listener and get back its remover.
function on(target, type, handler, opts) {
  target.addEventListener(type, handler, opts);
  return () => target.removeEventListener(type, handler, opts);
}

function animateCount(el, useHTML) {
  const text = useHTML ? el.innerHTML : el.textContent.trim();
  const match = text.match(/^(\d+)/);
  if (!match) return;
  const target = parseInt(match[1], 10);
  const suffix = text.replace(/^\d+/, '');
  const duration = 1800;
  const step = (ts, t0) => {
    const p = Math.min((ts - t0) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const value = Math.floor(ease * target) + suffix;
    if (useHTML) el.innerHTML = value; else el.textContent = value;
    if (p < 1) requestAnimationFrame(ts2 => step(ts2, t0));
  };
  requestAnimationFrame(ts => step(ts, ts));
}

// ── Hero reveal — lines slide up one by one ───────────────────
function initHeroReveal() {
  document.querySelectorAll('.hero__title .line').forEach((line, i) => {
    line.style.animationDelay = `${0.1 + i * 0.12}s`;
    line.classList.add('line--animate');
  });

  const fadeEls = document.querySelectorAll('.hero__badge, .hero__pills, .hero__right p, .hero__actions, .hero__bottom');
  fadeEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.7s ease ${0.5 + i * 0.12}s, transform 0.7s ease ${0.5 + i * 0.12}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }));
  });
}

// ── Animated counters in hero stats ──────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.hero__stat-val');
  if (!counters.length) return;
  const t = setTimeout(() => counters.forEach(el => animateCount(el, true)), 400);
  return () => clearTimeout(t);
}

// ── Scroll reveal with stagger ────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  return () => observer.disconnect();
}

// ── Staggered card entrance ───────────────────────────────────
const CARD_SEL = '.service-card, .portfolio-card, .why-item, .pricing-card, .contact-info__item';

function initCardStagger() {
  const timers = [];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(CARD_SEL).forEach((card, i) => {
        timers.push(setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 75));
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.services__grid, .portfolio__grid, .why__grid, .pricing__grid, .contact-info').forEach(container => {
    container.querySelectorAll(CARD_SEL).forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)';
    });
    observer.observe(container);
  });

  return () => { observer.disconnect(); timers.forEach(clearTimeout); };
}

// ── Tilt effect on cards ─────────────────────────────────────
function initTilt() {
  const offs = [];
  document.querySelectorAll('.pricing-card, .portfolio-card').forEach(card => {
    offs.push(on(card, 'mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-4px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    }));
    offs.push(on(card, 'mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, background 0.3s, box-shadow 0.3s';
    }));
    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';
  });
  return () => offs.forEach(fn => fn());
}

// ── Magnetic button effect ────────────────────────────────────
function initMagnetic() {
  const offs = [];
  document.querySelectorAll('.btn--lime, .btn--dark').forEach(btn => {
    offs.push(on(btn, 'mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    }));
    offs.push(on(btn, 'mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1), background 0.25s, box-shadow 0.25s';
    }));
  });
  return () => offs.forEach(fn => fn());
}

// ── Button ripple on click ────────────────────────────────────
function initRipple() {
  return on(document, 'click', e => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const circle = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    circle.className = 'ripple';
    circle.style.cssText = `
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
    `;
    btn.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
  });
}

// ── About page stat counters (scroll-triggered) ──────────────
function initAboutCounters() {
  const grid = document.querySelector('.about-stats__grid');
  if (!grid) return;
  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    grid.querySelectorAll('.about-stat__val').forEach(el => animateCount(el, false));
  }, { threshold: 0.4 });
  observer.observe(grid);
  return () => observer.disconnect();
}

// ── Marquee pause on hover ────────────────────────────────────
function initMarqueePause() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const band = track.parentElement;
  const offs = [
    on(band, 'mouseenter', () => { track.style.animationPlayState = 'paused'; }),
    on(band, 'mouseleave', () => { track.style.animationPlayState = 'running'; }),
  ];
  return () => offs.forEach(fn => fn());
}

// ── Cursor spotlight ─────────────────────────────────────────
function initSpotlight() {
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);
  const off = on(document, 'mousemove', e => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
  }, { passive: true });
  return () => { off(); spotlight.remove(); };
}

// ── Modals, FAQ accordion, contact form (event delegation) ───
function openModal(id) {
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

function initDelegatedUI() {
  const timers = [];

  const onClick = e => {
    const opener = e.target.closest('[data-modal-open]');
    if (opener) return openModal(opener.dataset.modalOpen);

    const closer = e.target.closest('[data-modal-close]');
    if (closer) return closeModal(closer.dataset.modalClose);

    // Click on the dark backdrop closes the modal.
    if (e.target.classList.contains('proj-modal-overlay')) return closeModal(e.target.id);

    const question = e.target.closest('.faq__question');
    if (question) {
      const item = question.closest('.faq__item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }
  };

  const onKey = e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.proj-modal-overlay.open').forEach(m => closeModal(m.id));
    }
  };

  const onSubmit = e => {
    const form = e.target;
    if (form.id !== 'contactForm') return;
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    const btn = form.querySelector('button[type="submit"]');
    const span = btn.querySelector('span');
    btn.disabled = true;
    span.textContent = 'Sending...';
    timers.push(setTimeout(() => {
      form.reset();
      success.classList.add('show');
      btn.disabled = false;
      span.textContent = 'Send Message';
      timers.push(setTimeout(() => success.classList.remove('show'), 5000));
    }, 1200));
  };

  const offs = [on(document, 'click', onClick), on(document, 'keydown', onKey), on(document, 'submit', onSubmit)];
  return () => { offs.forEach(fn => fn()); timers.forEach(clearTimeout); document.body.style.overflow = ''; };
}

// ── Full-page particle network ────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('siteCanvas');
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();

  const COUNT = 90;
  const MAX_DIST = 170;
  const PURPLE = '157,92,255';
  const PINK = '232,121,249';

  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.5 + 0.4,
    op: Math.random() * 0.3 + 0.12,
  }));

  let mx = -9999, my = -9999;
  const offs = [
    on(window, 'resize', resize, { passive: true }),
    on(document, 'mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true }),
    on(document, 'mouseleave', () => { mx = -9999; my = -9999; }),
  ];

  let frame;
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      // mouse repel
      const dx = p.x - mx, dy = p.y - my;
      const d = Math.hypot(dx, dy);
      if (d < 140 && d > 0) {
        const f = ((140 - d) / 140) * 0.55;
        p.vx += (dx / d) * f;
        p.vy += (dy / d) * f;
      }
      // speed cap
      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 1.5) { p.vx *= 0.93; p.vy *= 0.93; }
      p.x += p.vx; p.y += p.vy;
      // wrap edges
      if (p.x < -20) p.x = canvas.width + 20;
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.y < -20) p.y = canvas.height + 20;
      if (p.y > canvas.height + 20) p.y = -20;
    });

    // connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          const a = (1 - d / MAX_DIST) * 0.16;
          const g = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
          g.addColorStop(0, `rgba(${PURPLE},${a})`);
          g.addColorStop(1, `rgba(${PINK},${a * 0.5})`);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = g;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // dots
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PURPLE},${p.op})`;
      ctx.shadowColor = `rgba(${PURPLE},0.5)`;
      ctx.shadowBlur = 5;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    frame = requestAnimationFrame(tick);
  }
  tick();

  return () => { cancelAnimationFrame(frame); offs.forEach(fn => fn()); };
}
