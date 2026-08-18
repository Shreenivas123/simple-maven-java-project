document.addEventListener('DOMContentLoaded', function() {
    // CTA Button in Hero Section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome! Thanks for your interest from GitHub Actions CI/CD!');
        });
    }

    // Feature Buttons
    const featureButtons = document.querySelectorAll('.feature-button');
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const feature = this.getAttribute('data-feature');
            const featureInfo = {
                fast: 'Our advanced caching and optimization techniques ensure lightning-fast load times.',
                secure: 'We use industry-standard security protocols including SSL/TLS encryption and regular security audits.',
                responsive: 'Our designs adapt seamlessly to all screen sizes using modern CSS Grid and Flexbox.',
                scalable: 'Built with cloud-native architecture to handle millions of concurrent users.',
                innovative: 'We stay ahead of the curve with cutting-edge technologies and modern development practices.',
                support: 'Our expert support team is available around the clock to assist you with any questions.'
            };
            alert(featureInfo[feature] || 'Learn more about this feature');
        });
    });

    // Action Buttons
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            if (buttonText === 'Request Demo') {
                alert('Thanks for your interest! Our team will contact you shortly to schedule a demo.');
            } else if (buttonText === 'View Pricing') {
                alert('Our pricing plans are customized based on your needs. Contact us for a quote!');
            } else if (buttonText === 'Read Documentation') {
                alert('Documentation is available at: docs.mywebsite.com');
            }
        });
    });

    // Contact Form Submission
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon at ${email}.`);
            
            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
