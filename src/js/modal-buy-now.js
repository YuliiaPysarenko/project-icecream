(() => {
    const refs = {
        openModalBtn: document.querySelectorAll('[data-modal-open-buy-now]'),
        closeModalBtn: document.querySelector('[data-buy-now-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.forEach(function(item) {
        item.addEventListener('click', toggleModal);
    })
    console.log(refs.openModalBtn)
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle('is-hidden');
    }
})();