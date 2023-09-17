const  burger = document?.querySelector('[data-burger]');
const sidebar = document.querySelector('.page__sidebar-wrapper');
console.log(burger);
console.log(sidebar);

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    sidebar.classList.toggle('element--visible');
})