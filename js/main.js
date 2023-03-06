const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu');
if(menuIcon && menuList) {
    menuIcon.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('menu-icon--active');
        menuList.classList.toggle('menu--active');
    })
    document.addEventListener('click', function(e) {
        if(menuList.classList.contains('menu--active')) {
            let target = e.composedPath().includes(menuIcon) || e.composedPath().includes(menuList);
            if (!target) {
                document.body.classList.remove('lock');
                menuIcon.classList.remove('menu-icon--active');
                menuList.classList.remove('menu--active');
            }
        }
    })  
}