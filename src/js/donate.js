// donate.js

document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodSelect = document.getElementById('payment-method');
    const upiField = document.getElementById('upi-field');

    // Show or hide UPI ID field based on payment method selection
    paymentMethodSelect.addEventListener('change', function() {
        if (paymentMethodSelect.value === 'upi') {
            upiField.classList.remove('hidden');
        } else {
            upiField.classList.add('hidden');
        }
    });
});
