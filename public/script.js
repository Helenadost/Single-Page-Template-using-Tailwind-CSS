
document.addEventListener('DOMContentLoaded', () => {


    // Mobile menu variables
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");
    const links = document.querySelectorAll('.link');
    // Image modal variables
    const openModal = document.querySelectorAll('.openModal');
    const closeModal = document.querySelector('.closeModal');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    // Image modal functions
    openModal.forEach((image) => {
        image.onclick = function () {
            modalImage.src = image.src;
            modal.classList.remove('hidden');
        };
    });

    closeModal.onclick = function () {
        modal.classList.add('hidden');
    };

    // Mobile menu functions
    openMenu.onclick = function () {
        menu.classList.add('translate-x-0');
        menu.classList.remove('translate-x-full');
    };

    function closeNav() {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
    };

    closeMenu.onclick = function () {
        closeNav();
    };

    links.forEach((link) => {
        link.onclick = function () {
            closeNav();
        }
    });

});


