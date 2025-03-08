// Function to update the order summary
function updateSummary() {
  let subtotal = 0;

  // Calculate subtotal based on all items
  document.querySelectorAll('.item').forEach(item => {
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    const price = parseFloat(item.querySelector('.price').textContent);
    subtotal += quantity * price;
  });

  const shipping = 5.00; // Fixed shipping fee
  const total = subtotal + shipping;

  // Update the DOM
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('shipping').textContent = shipping.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}

// Add event listeners for quantity buttons
document.querySelectorAll('.quantity-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.item');
    const quantityElement = item.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    if (button.classList.contains('add-btn')) {
      quantity += 1;
    } else if (button.classList.contains('subtract-btn')) {
      if (quantity > 1) {
        quantity -= 1;
      }
    }

    quantityElement.textContent = quantity;
    updateSummary();
  });
});

// Add event listeners for remove buttons
document.querySelectorAll('.remove-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.item');
    item.remove();
    updateSummary();
  });
});

// Initial update
updateSummary();