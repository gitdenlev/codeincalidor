(() => {
  const refs = {
    openPriceModal1Btn: document.querySelector('[data-price-modal-1-open]'),
    openPriceModal2Btn: document.querySelector('[data-price-modal-2-open]'),
    openPriceModal3Btn: document.querySelector('[data-price-modal-3-open]'),
    openPriceModal4Btn: document.querySelector('[data-price-modal-4-open]'),
    closePriceModalBtn: document.querySelector('[data-price-modal-close]'),
    priceModal: document.querySelector('[data-price-modal]'),
  };

  refs.openPriceModal1Btn.addEventListener('click', togglePriceModal);
  refs.openPriceModal2Btn.addEventListener('click', togglePriceModal);
  refs.openPriceModal3Btn.addEventListener('click', togglePriceModal);
  refs.openPriceModal4Btn.addEventListener('click', togglePriceModal);
  refs.closePriceModalBtn.addEventListener('click', togglePriceModal);

  function togglePriceModal() {
    refs.priceModal.classList.toggle('is-hidden');
  }
})();
