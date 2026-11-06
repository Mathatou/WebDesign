const form = document.querySelector('#ContactForm');
form.addEventListener("submit", function(event)
{
  
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  // Create an object to hold the form data
  const formData = {
    name: name,
    email: email,
    message: message
  };
  if (formData.name === '' || formData.email === '' || formData.message === '') {
    alert('Please fill in all fields before submitting the form.');
    return;
  }

  // Log the form data to the console (you can replace this with your own logic)
  console.log('Form Data:', formData);
  alert('Thank you for your message! We will get back to you soon.');
  form.reset();
});
