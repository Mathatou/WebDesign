/* =========================================================
   main.js – loaded on every page
   1. Hamburger menu on small screens
   2. "More info" dialogs (one generic code for all of them)
   ========================================================= */

/* ---------- 1. Hamburger menu ---------- */
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // close the menu with the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', false);
      menuToggle.focus();
    }
  });
}

/* ---------- 2. Dialogs ---------- */
// Every button with data-dialog="id" opens the <dialog> with that id.
document.querySelectorAll('[data-dialog]').forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialog);
  if (!dialog) return;

  button.addEventListener('click', () => dialog.showModal());
});

document.querySelectorAll('dialog').forEach((dialog) => {
  // the "Close" button closes the dialog it is in
  const closeButton = dialog.querySelector('.close-dialog');
  if (closeButton) {
    closeButton.addEventListener('click', () => dialog.close());
  }

  // a click on the dark backdrop (outside the box) also closes it
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
