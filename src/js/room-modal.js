(() => {
    const refs = {
      openRoomModalBtn: document.querySelector("[data-room-modal-open]"),
      closeRoomModallBtn: document.querySelector("[data-room-modal-close]"),
      roomModal: document.querySelector("[data-room-modal]"),
    };
  
    refs.openRoomModalBtn.addEventListener("click", toggleRoomModal);
    refs.closeRoomModalBtn.addEventListener("click", toggleRoomModal);
  
    function toggleRoomModal() {
      refs.roomModal.classList.toggle("is-hidden");
    }
  })();