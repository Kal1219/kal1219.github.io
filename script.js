const toggle = document.querySelector('[data-nav-toggle]');
const menu = document.querySelector('[data-nav-menu]');
const header = document.querySelector('[data-header]');
function closeMenu() { toggle?.setAttribute('aria-expanded', 'false'); toggle?.setAttribute('aria-label', 'Abrir menú'); menu?.classList.remove('open'); document.body.classList.remove('menu-open'); }
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú'); menu?.classList.toggle('open', !open); document.body.classList.toggle('menu-open', !open); });
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (innerWidth >= 900) closeMenu(); });
function updateHeader() { header?.classList.toggle('scrolled', scrollY > 12); }
updateHeader(); window.addEventListener('scroll', updateHeader, { passive: true });
