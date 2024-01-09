
function burger() {
    const btn = document.querySelector('.burger__btn');
    const btnSpan = document.querySelectorAll('.burger__btn span');
    const nav = document.querySelector('.header__nav');
    const promo = document.querySelector('.promo');

    let menu = false;

    function show() {
        btnSpan[0].style.transform = 'rotate(33deg)';
        btnSpan[0].style.transformOrigin = 'left';
        btnSpan[1].style.opacity = '0';
        btnSpan[1].style.width = '0%';
        btnSpan[2].style.transform = 'rotate(-33deg)';
        btnSpan[2].style.transformOrigin = 'left';

        nav.style.height = '167px';
        promo.style.paddingTop = '200px'

        menu = true;
    }

    function hide() {
        btnSpan[0].style.transform = 'rotate(0deg)';
        btnSpan[1].style.opacity = '1';
        btnSpan[1].style.width = '100%';
        btnSpan[2].style.transform = 'rotate(0deg)';

        nav.style.height = '0px';
        promo.style.paddingTop = '31px'

        menu = false;
    }

    btn.addEventListener('click', () => {
        menu ? hide() : show();
    });

    const link = document.querySelectorAll('.header__nav-link');
    link.forEach(item => {
        item.addEventListener('click', hide);
    });
}


export default burger