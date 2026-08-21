// Meta Pixel - Cardápio Esperto
const META_PIXEL_ID = '2151654785649073';

(function loadMetaPixel(f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = true;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', META_PIXEL_ID);
fbq('track', 'PageView');
fbq('track', 'ViewContent', {
  content_name: 'Cardápio Esperto',
  content_category: 'Produto digital',
  value: 14.90,
  currency: 'BRL'
});

const checkout = document.getElementById('checkout-link');

checkout?.addEventListener('click', (event) => {
  const url = checkout.dataset.checkout;

  if (!url) {
    event.preventDefault();
    alert('Checkout será conectado aqui assim que o link de pagamento estiver pronto.');
    return;
  }

  if (typeof fbq === 'function') {
    fbq('track', 'InitiateCheckout', {
      content_name: 'Cardápio Esperto',
      value: 14.90,
      currency: 'BRL'
    });
  }
});

const productCover = document.querySelector('.real-cover');

productCover?.addEventListener('error', () => {
  if (!productCover.dataset.fallbackApplied) {
    productCover.dataset.fallbackApplied = 'true';
    productCover.src = 'cover-fallback.svg';
  }
});
