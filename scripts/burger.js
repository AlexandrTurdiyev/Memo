const body = document.body;
const overlay = document.querySelector('.overlay');
const  burger = document?.querySelector('[data-burger]');
const sidebar = document.querySelector('.page__sidebar-wrapper');
const sidebarLinks = document.querySelectorAll('.sidebar__link');

function toggleClassesForBurger () {
    burger.classList.toggle('burger--active');
    sidebar.classList.toggle('element--visible');
    body.classList.toggle('stop-scroll');
    overlay.classList.toggle('overlay--active');
}
burger.addEventListener('click', () => {
    toggleClassesForBurger();
})

sidebarLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        ifBurgerMenuOpen();
    })
})

function ifBurgerMenuOpen () {
    if (overlay.classList.contains('overlay--active')) {
        if (burger.classList.contains('burger--active')) {
            if (sidebar.classList.contains('element--visible')) {
                if (body.classList.contains('stop-scroll')) {
                    toggleClassesForBurger();
                }
            }
        }
    }
}

overlay.addEventListener('click', () => {
    ifBurgerMenuOpen();
})