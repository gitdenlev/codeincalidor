(() => {
  const refs = {
    openTableModalBtn: document.querySelector('[data-table-modal-open]'),
    openTableMenuModalBtn: document.querySelector('[data-table-menu-modal-open]'),
    closeTableModalBtn: document.querySelector('[data-table-modal-close]'),
    closeTableMenuModalBtn: document.querySelector('[data-table-menu-modal-close]'),
    tableModal: document.querySelector('[data-table-modal]'),
  };

  refs.openTableModalBtn.addEventListener('click', toggleTableModal);
  refs.openTableMenuModalBtn.addEventListener('click', toggleTableMenuModal);
  refs.closeTableModalBtn.addEventListener('click', toggleTableModal);
  refs.closeTableMenuModalBtn.addEventListener('click', toggleTableMenuModal);

  function toggleTableModal() {
    refs.tableModal.classList.toggle('is-hidden');
  }
  function toggleTableMenuModal() {
    refs.tableModal.classList.toggle('is-hidden');
  }
})();
