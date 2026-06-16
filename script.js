// Add floating WhatsApp button
document.addEventListener('DOMContentLoaded', function() {
    // Create floating WhatsApp button
    const floatingWhatsApp = document.createElement('a');
    floatingWhatsApp.href = 'https://wa.me/233595390204';
    floatingWhatsApp.className = 'floating-whatsapp';
    floatingWhatsApp.target = '_blank';
    floatingWhatsApp.title = 'Chat with us on WhatsApp';
    floatingWhatsApp.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(floatingWhatsApp);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Track WhatsApp clicks for analytics
    document.addEventListener('click', function(event) {
        if (event.target.closest('[href*="wa.me"]')) {
            console.log('WhatsApp link clicked');
            // You can send analytics data here
        }
    });
});

// Function to send message to WhatsApp
function sendWhatsAppMessage(message = '') {
    const phoneNumber = '233595390204';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Export for use in other scripts
window.sendWhatsAppMessage = sendWhatsAppMessage;
