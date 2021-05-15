const navigationController = (() => {
    
    const _navigation = document.querySelector('.navigation');
    const _navList = document.querySelector('.navigation__list');

    window.addEventListener('scroll', () => {

        if(window.innerWidth > 724) {
            if(window.scrollY > 150) {
                _navigation.style.position = "fixed";
                _navigation.style.backgroundColor = "#120f0f";
                _navigation.style.border = "none";
            } else {
                _navigation.style.position = "inherit";
                _navigation.style.backgroundColor = "inherit";
                _navigation.style.borderBottom = ".01rem solid rgba(255,255,255,.25)";
            }
        }

        if(window.innerWidth <= 725) {
            _navigation.style.position = "fixed";
        } 
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth <= 725) {
            _navigation.style.backgroundColor = "#120f0f";
            _navigation.style.borderBottom = "none";
            _navigation.classList.remove('activeMobileNav')
            _navList.style.display = "none";
        } else {
            _navigation.style.borderBottom = ".01rem solid rgba(255,255,255,.25)";
            _navigation.style.backgroundColor = "inherit";
            _navigation.classList.remove('activeMobileNav')
            _navList.style.display = "flex";
        }

        if(window.scrollY > 150) {
            _navigation.style.backgroundColor = "#120f0f";
            _navigation.style.borderBottom = "none";
        }
    });

})();


const mobileDropdownController = (() => {

    const _navList = document.querySelector('.navigation__list');
    const _navBackground = document.querySelector('.navigation');
    const _navButton = document.querySelector('.mobile-menu__button');

    _navButton.addEventListener('click', () => {
        _navBackground.classList.toggle('activeMobileNav');

        if(_navBackground.classList.contains('activeMobileNav')) {
            _navList.style.display = "flex";
        } else {
            _navList.style.display = "none";
        }
    });

})();