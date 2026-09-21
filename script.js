const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Schließen' : 'Menü';
});

document.querySelectorAll('#main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = 'Menü';
  });
});

document.querySelector('#signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.querySelector('#form-message');
  const button = form.querySelector('button');
  button.textContent = 'Geschafft ✓';
  button.disabled = true;
  message.textContent = 'Danke — der nächste Brief ist unterwegs.';
  message.style.color = 'var(--orange)';
});
