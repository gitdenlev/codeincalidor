(() => {
  const refs = {
    openRoomModalBtn: document.querySelector('[data-room-modal-open]'),
    openRoomHpModalBtn: document.querySelector('[data-room-hp-modal-open]'),
    closeRoomModalBtn: document.querySelector('[data-room-modal-close]'),
    closeRoomHPModalBtn: document.querySelector('[data-room-hp-modal-close]'),
    roomModal: document.querySelector('[data-room-modal]'),
  };

  refs.openRoomModalBtn.addEventListener('click', toggleRoomModal);
  refs.openRoomHpModalBtn.addEventListener('click', toggleRoomHpModal);
  refs.closeRoomModalBtn.addEventListener('click', toggleRoomModal);
  refs.closeRoomHpModalBtn.addEventListener('click', toggleRoomHpModal);

  function toggleRoomModal() {
    refs.roomModal.classList.toggle('is-hidden');
  }
  function toggleRoomHpModal() {
    refs.roomModal.classList.toggle('is-hidden');
  }
})();

// (() => {
//   const refs = {
//     openRoomModalBtn: document.querySelector('[data-room-modal-open]'),
//     closeRoomModalBtn: document.querySelector('[data-room-modal-close]'),
//     roomModal: document.querySelector('[data-room-modal]'),
//   };

//   refs.openRoomModalBtn.addEventListener('click', toggleRoomModal);
//   refs.closeRoomModalBtn.addEventListener('click', toggleRoomModal);

//   function toggleRoomModal() {
//     refs.roomModal.classList.toggle('is-hidden');
//   }
// })();


