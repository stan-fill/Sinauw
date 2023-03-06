const navMenu = document.querySelectorAll('.item__link');
var widthWindow = window.innerWidth;
for (let links of navMenu) {
    if (widthWindow < 828) {
        links.classList.remove('active');
        links.addEventListener('click', function() {
            menuList.classList.remove('menu--active');
            menuIcon.classList.remove('menu-icon--active');
            document.body.classList.remove('lock');
        })
    }
}