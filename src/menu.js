// const yacors = document.querySelectorAll('.mobile-menu__link');
// for (let index = 0; index < yacors.length; index++) {
//   if(yacors.length > 4){
//     index = 0
//   }
//   // пишем в переменную объект над которым будем проводить расчеты
//   let yacor = yacors[index];
//   yacor.addEventListener('click', clossedMenu());
// }

// function clossedMenu(){
//   // mobileMenu.classList.remove('is-open');
//   console.log("oh")
// }



    // let selectedTd;

    // table.onclick = function(event) {
    //   let target = event.target; // где был клик?
    
    //   if (target.tagName != 'TD') return; // не на TD? тогда не интересует
    
    //   highlight(target); // подсветить TD
    // };
    
    // function highlight(td) {
    //   if (selectedTd) { // убрать существующую подсветку, если есть
    //     selectedTd.classList.remove('highlight');
    //   }
    //   selectedTd = td;
    //   selectedTd.classList.add('highlight'); // подсветить новый td
    // }















(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    // const mobileMenuBody = document.querySelector('.body');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      // mobileMenuBody.classList.toggle('scroll');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      // mobileMenuBody.classList.remove('scroll');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();