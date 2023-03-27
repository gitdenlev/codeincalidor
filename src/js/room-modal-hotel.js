(() => {
  const refs = {
    openRoomModalHotelBtn: document.querySelector('[data-room-modal-hotel-open]'),
    closeRoomModalBtn: document.querySelector('[data-room-modal-close]'),
    roomModal: document.querySelector('[data-room-modal]'),
  };

  refs.openRoomModalHotelBtn.addEventListener('click', toggleRoomModal);
  refs.closeRoomModalBtn.addEventListener('click', toggleRoomModal);


  function toggleRoomModal() {
    refs.roomModal.classList.toggle('is-hidden');
  }

})();




