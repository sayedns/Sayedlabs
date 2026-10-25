/* Shared branding and navigation; profile-card scripts remain on people.html. */
(() => {
  const scriptUrl = new URL(document.currentScript ? document.currentScript.src : 'script.js', document.baseURI);
  const brandCss = new URL('site-branding.css', scriptUrl).href;
  if (![...document.querySelectorAll('link[rel="stylesheet"]')].some(link => link.href === brandCss)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet'; link.href = brandCss; document.head.appendChild(link);
  }
  const imageUrl = new URL('assets/sayed-lab-logo.webp', scriptUrl).href;
  const brand = document.querySelector('.header .brand');
  if (brand) {
    brand.classList.add('site-brand');
    if (!brand.querySelector('.site-logo')) {
      const logo = document.createElement('img');
      logo.className = 'site-logo'; logo.src = imageUrl; logo.alt = '';
      logo.width = 148; logo.height = 192; logo.decoding = 'async';
      brand.prepend(logo);
    }
  }
  const footer = document.querySelector('.footer-grid > div:first-child');
  if (footer && !footer.querySelector('.site-footer-logo')) {
    const logo = document.createElement('img');
    logo.className = 'site-footer-logo'; logo.src = imageUrl;
    logo.alt = 'Sayed Lab heart logo'; logo.width = 148; logo.height = 192;
    logo.loading = 'lazy'; logo.decoding = 'async'; footer.prepend(logo);
  }
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.header .navlinks');
  if (!btn || !nav) return;
  if (!nav.id) nav.id = 'site-navigation';
  btn.setAttribute('aria-controls', nav.id);
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open navigation menu');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !btn.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(min-width:1121px)').addEventListener('change', event => {
    if (event.matches) setOpen(false);
  });
})();
