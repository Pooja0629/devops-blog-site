/* =============================================
   INKWELL — Shared Scripts
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active nav link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const open = mobileNav.classList.contains('open');
      hamburger.setAttribute('aria-expanded', open);
      hamburger.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
      hamburger.querySelectorAll('span')[1].style.opacity = open ? '0' : '1';
      hamburger.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
    });
  }

  /* ── Back to top ── */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
    });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Intersection observer: fade-up ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Newsletter form ── */
  document.querySelectorAll('.nl-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn   = form.querySelector('button');
      if (!input.value || !input.value.includes('@')) {
        input.style.borderColor = '#c8401a';
        setTimeout(() => input.style.borderColor = '', 1500);
        return;
      }
      btn.textContent = 'Subscribed ✓';
      btn.style.background = '#2a7a4b';
      input.value = '';
      input.disabled = true;
      btn.disabled = true;
    });
  });

  /* ── Search overlay (simple filter on blog page) ── */
  const searchBtn  = document.getElementById('search-btn');
  const searchBar  = document.getElementById('search-bar');
  const searchInput = document.getElementById('search-input');
  if (searchBtn && searchBar) {
    searchBtn.addEventListener('click', () => {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open')) searchInput.focus();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('.post-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ── Blog category filter ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.post-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  /* ── Reading progress bar (post pages) ── */
  const progress = document.getElementById('reading-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct  = (window.scrollY / docH) * 100;
      progress.style.width = `${Math.min(pct, 100)}%`;
    });
  }

});