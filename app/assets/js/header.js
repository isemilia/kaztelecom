window.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.querySelector('[data-menu-trigger]');
    const menu = document.querySelector('[data-menu]');

    menuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('menu--active');
        menuTrigger.classList.toggle('header-trigger--active');
    })
});