const mobileMenu = document.getElementById('MobileMenu');
const navItems = document.querySelector('.Nav-Items');

mobileMenu.addEventListener('click', () => {
    navItems.classList.toggle('Active');
});


