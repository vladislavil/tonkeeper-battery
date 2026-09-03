export function setupMenu() {
    const bannerNav = document.querySelector('.header .header__nav');
    const menu =  document.querySelector('.header .header__menu');
    const menuItems = document.querySelectorAll('.header .header__link');

    if(bannerNav === null || menu === null || menuItems.length === 0) {
        return;
    }

    function toggleMenu() {
        if(bannerNav === null || menu === null) {
            return;
        }

        menu.classList.toggle("change");
        bannerNav.classList.toggle('menu-opened');
        bannerNav.classList.add('menu-transition');
    
        document.body.classList.toggle('noscroll');
        document.querySelector('html')?.classList.toggle('noscroll');
    }

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if(bannerNav.classList.contains('menu-opened')) {
                toggleMenu();
            }
        })
    })

    bannerNav.addEventListener('transitionend', function () {
        bannerNav.classList.remove('menu-transition');
    });
    
    menu.addEventListener("click", function () {
        toggleMenu();
    });

}
