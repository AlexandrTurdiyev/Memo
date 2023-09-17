const  burger = document?.querySelector('[data-burger]');
const sidebar = document.querySelector('.page__sidebar-wrapper');
console.log(burger);
console.log(sidebar);

burger.addEventListener('click', () => {
    sidebar.classList.toggle('element--visible');
})