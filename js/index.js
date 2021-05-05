const navigationController = (() => {
    
    const _navigation = document.querySelector('.navigation');

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
        } else {
            _navigation.style.borderBottom = ".01rem solid rgba(255,255,255,.25)";
            _navigation.style.backgroundColor = "inherit";
        }

        if(window.scrollY > 150) {
            _navigation.style.backgroundColor = "#120f0f";
            _navigation.style.borderBottom = "none";
        }
    });

})();