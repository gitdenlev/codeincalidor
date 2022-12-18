// (() => {
//   const refs = {
//     openPriceModalBtn: document.querySelector('[data-price-modal-open]'),
//     closePriceModalBtn: document.querySelector('[data-price-modal-close]'),
//     priceModal: document.querySelector('[data-price-modal]'),
//   };

//   refs.openPriceModalBtn.addEventListener('click', togglePriceModal);
//   refs.closePriceModalBtn.addEventListener('click', togglePriceModal);

//   function togglePriceModal() {
//     refs.priceModal.classList.toggle('is-hidden');
//   }
// })();


const refsPrice = {
  openModalBtn: document.querySelector('[data-price-modal-open]'),
  closeModalBtn: document.querySelector('[data-price-modal-close]'),
  openModalBtn1: document.querySelector('[data-price-modal-open1]'),
  openModalBtn2: document.querySelector('[data-price-modal-open2]'),
  openModalBtn3: document.querySelector('[data-price-modal-open3]'),
  modal: document.querySelector('[data-price-modal]'),
};

function toggleModalPrice(e) {
  const modalApartmentType = refsPrice.modal.children[0].children[1].children[1]
  if (e.target === refsPrice.openModalBtn)modalApartmentType.textContent = 'Двомісний люкс'
  if (e.target === refsPrice.openModalBtn1)modalApartmentType.textContent = 'Двомісний люкс'
  if (e.target === refsPrice.openModalBtn3)modalApartmentType.textContent = 'Двомісний номер'
  if (e.target === refsPrice.openModalBtn2)modalApartmentType.textContent = 'Трьохісний номер'
  refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

function toggleModalClickOutsidePrice(e) {
  if(e.target === refsPrice.modal){
    refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
  }
}

const modalOpenPrice = (refs) => {
  console.log(refs)
  console.log(123)
  if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn2)refs.openModalBtn2.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn3)refs.openModalBtn3.addEventListener('click', toggleModalPrice);
  if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalPrice);
  document.addEventListener('click',toggleModalClickOutsidePrice)
}
modalOpenPrice(refsPrice)