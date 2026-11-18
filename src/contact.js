/* =========================================================
   contact.js – validation of the contact form
   Errors are shown under each field instead of an alert().
   There is no server, so nothing is really sent.
   ========================================================= */

const form = document.querySelector('#contact-form');
const successMessage = document.querySelector('#form-success');

const fields = {
  name: {
    input: document.querySelector('#name'),
    check: (value) => value.length >= 2 || 'Please enter your name.',
  },
  email: {
    input: document.querySelector('#email'),
    check: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please enter a valid email address.',
  },
  message: {
    input: document.querySelector('#message'),
    check: (value) => value.length >= 10 || 'Your message must have at least 10 characters.',
  },
};

// returns true if the field is valid, otherwise shows the error under it
function validateField(field) {
  const result = field.check(field.input.value.trim());
  const errorElement = document.getElementById(field.input.id + '-error');

  if (result === true) {
    field.input.classList.remove('invalid');
    field.input.removeAttribute('aria-invalid');
    errorElement.textContent = '';
    return true;
  }

  field.input.classList.add('invalid');
  field.input.setAttribute('aria-invalid', 'true');
  errorElement.textContent = result;
  return false;
}

// check a field again as soon as the user leaves it
Object.values(fields).forEach((field) => {
  field.input.addEventListener('blur', () => validateField(field));
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // no server: we handle the form in JavaScript

  const results = Object.values(fields).map(validateField);
  const allValid = results.every(Boolean);

  if (!allValid) {
    successMessage.hidden = true;
    // put the cursor in the first wrong field
    form.querySelector('.invalid').focus();
    return;
  }

  const name = fields.name.input.value.trim();
  successMessage.textContent = 'Thank you ' + name + ', your message has been sent!';
  successMessage.hidden = false;
  form.reset();
});
