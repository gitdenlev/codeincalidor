(() => {
  const refs = {
    openTableModalBtn: document.querySelector('[data-table-modal-open]'),
    closeTableModalBtn: document.querySelector('[data-table-modal-close]'),
    tableModal: document.querySelector('[data-table-modal]'),
  };

  refs.openTableModalBtn.addEventListener('click', toggleTableModal);
  refs.closeTableModalBtn.addEventListener('click', toggleTableModal);

  function toggleTableModal() {
    refs.tableModal.classList.toggle('is-hidden');
  }
})();
