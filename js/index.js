const navigationController = (() => {
    
    const _navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 150) {
            _navigation.style.position = "fixed";
            _navigation.style.backgroundColor = "#120f0f";
            _navigation.style.border = "none";
        } else {
            _navigation.style.position = "inherit";
            _navigation.style.backgroundColor = "inherit";
            _navigation.style.borderBottom = ".01rem solid rgba(255,255,255,.25)";
        }
    });

})();