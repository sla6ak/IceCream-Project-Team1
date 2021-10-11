(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mainmodal-open]'),
      openModalBtn2: document.querySelector('[data-mainmodal2-open]'),
      closeModalBtn: document.querySelector('[data-mainmodal-close]'),
      modal: document.querySelector('[data-mainmodal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleMainmodal);
    refs.closeModalBtn.addEventListener('click', toggleMainmodal);
  
    function toggleMainmodal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();