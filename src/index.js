import './sass/main.scss';

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-buy-now]'),
      closeModalBtn: document.querySelector('[data-buy-now-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-about]'),
      closeModalBtn: document.querySelector('[data-about-close]'),
      modal: document.querySelector('[data-modal-about]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();