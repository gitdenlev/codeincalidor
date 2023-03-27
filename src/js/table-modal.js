(() => {
  const refs = {
    openTableModal1Btn: document.querySelector('[data-table-modal-1-open]'),
    openTableModal2Btn: document.querySelector('[data-table-modal-2-open]'),
    closeTableModalBtn: document.querySelector('[data-table-modal-close]'),
    roomModal: document.querySelector('[data-table-modal]'),
  };

  refs.openTableModal1Btn.addEventListener('click', toggleRoomModal);
  refs.openTableModal2Btn.addEventListener('click', toggleRoomModal);
  refs.closeTableModalBtn.addEventListener('click', toggleRoomModal);


  function toggleRoomModal() {
    refs.roomModal.classList.toggle('is-hidden');
  }

})();
