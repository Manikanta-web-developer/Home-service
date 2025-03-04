// You can add any interactive functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners for buttons
    const quoteButtons = document.querySelectorAll('.free-quote');
    quoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for requesting a free quote! We will contact you shortly.');
        });
    });
});