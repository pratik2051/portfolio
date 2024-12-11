// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});


function sendEmail() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate the form fields
  if (!name || !email || !message) {
      document.getElementById('status').innerText = 'Please fill in all fields.';
      return;
  }

  // EmailJS template parameters
  const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
  };

  // Send the email using EmailJS
  emailjs.send('service_tqvtc99', 'template_soouw5j', templateParams)
      .then(function(response) {
          console.log('Email sent successfully!', response.status, response.text);
          document.getElementById('status').innerText = 'Email sent successfully!';
          alert("sent succesfully");
      }, function(error) {
          console.error('Failed to send email:', error);
          document.getElementById('status').innerText = 'Failed to send email. Please try again.';
          alert("Failed please try again")
      });
}