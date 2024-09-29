// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.elements['name'].value;
    const email = this.elements['email'].value;
    const message = this.elements['message'].value;

    // Here you would typically send this data to a server
    // For this example, we'll just log it to the console and show a success message
    console.log('Form submitted:', { name, email, message });

    // Show success message
    document.getElementById('form-status').textContent = 'Message sent successfully!';

    // Clear the form
    this.reset();

    // Clear the success message after 3 seconds
    setTimeout(() => {
        document.getElementById('form-status').textContent = '';
    }, 3000);
});