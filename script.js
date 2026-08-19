const checkout = document.getElementById('checkout-link');

checkout?.addEventListener('click', (event) => {
  const url = checkout.dataset.checkout;
  if (!url) {
    event.preventDefault();
    alert('Checkout será conectado aqui assim que o link de pagamento estiver pronto.');
  }
});
