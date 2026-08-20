const checkout = document.getElementById('checkout-link');

checkout?.addEventListener('click', (event) => {
  const url = checkout.dataset.checkout;
  if (!url) {
    event.preventDefault();
    alert('Checkout será conectado aqui assim que o link de pagamento estiver pronto.');
  }
});

const productCover = document.querySelector('.real-cover');

productCover?.addEventListener('error', () => {
  if (!productCover.dataset.fallbackApplied) {
    productCover.dataset.fallbackApplied = 'true';
    productCover.src = 'cover-fallback.svg';
  }
});
