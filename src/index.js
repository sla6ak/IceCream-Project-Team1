import './sass/main.scss';


(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-location-open]'),
      closeModalBtn: document.querySelector('[data-location-close]'),
      modal: document.querySelector('[data-location]'),
      modald: document.querySelector('[data-locationd]'),
      
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modald.classList.toggle('scroll');
    }
  })();



// (() => {
//     const refss = {
//       openModalBtn2: document.querySelector('[data-footermodal-open]'),
//       closeModalBtn2: document.querySelector('[data-footermodal-close]'),
//       modal2: document.querySelector('[data-footermodal]'),
//       modald2: document.querySelector('[data-locationd]'),
//     };
  
//     refss.openModalBtn2.addEventListener('click', toggleModal2);
//     refss.closeModalBtn2.addEventListener('click', toggleModal2);
  
//     function toggleModal2() {
//       refss.modal2.classList.toggle('is-hidden');
//       refss.modald2.classList.toggle('scroll');
//     }
//   })();
