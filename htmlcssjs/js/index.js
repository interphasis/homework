
import BurgerMenu from "./burger.js";
import saleModal from './sale.js';
import slider from './slider.js';

try {
  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__list-item-link",
      BREAKPOINT: 768,
      MAIN: "main",
    },
  );
  
} catch (error) {
  console.error(error);
}
const searchOpenBtn = document.querySelector('.header__account-search');
const modal = document.querySelector('.search_modal');
const modalContent = document.querySelector('.search_modal-content');

function closeModal() {
  modal.classList.remove('search_modal--open');
  modalContent.classList.remove('search_modal-content--open');
  document.body.classList.remove('no-scroll');
}


searchOpenBtn.addEventListener('click', () => {
   {
    modal.classList.add('search_modal--open');
    modalContent.classList.add('search_modal-content--open');
    document.body.classList.add('no-scroll');
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal && modal.classList.contains('search_modal--open')) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('search_modal--open')) {
    closeModal();
  }
});
saleModal();
slider();