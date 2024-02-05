
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');


menuIcon.addEventListener('click', function() {
    menuItems.classList.toggle('menu-open');
});