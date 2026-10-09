
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navlinks');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.right = '4vw';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.background = '#fbfaf7';
    nav.style.padding = '1rem';
    nav.style.border = '1px solid #e8e2dc';
    nav.style.borderRadius = '8px';
    nav.style.boxShadow = '0 12px 30px rgba(23,32,51,.08)';
  });
}
