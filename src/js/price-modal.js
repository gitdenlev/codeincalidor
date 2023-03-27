(() => {
  const refs = {
    openPriceModalBtn: document.querySelector('[data-price-modal-open]'),
    closePriceModalBtn: document.querySelector('[data-price-modal-close]'),
    priceModal: document.querySelector('[data-price-modal]'),
  };

  refs.openPriceModalBtn.addEventListener('click', togglePriceModal);
  refs.closePriceModalBtn.addEventListener('click', togglePriceModal);

  function togglePriceModal() {
    refs.priceModal.classList.toggle('is-hidden');
  }
})();
