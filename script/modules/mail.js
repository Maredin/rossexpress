function mail() {
    const inputUser = document.querySelector('.contacts__form-input');
    const btnMail = document.querySelector('.contacts__form-btn');
    const errorMail = document.querySelector('.contacts__error');

    function isEmailValid(emailAdress) {
        var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
        return EMAIL_REGEXP.test(emailAdress)
    }

    function errorInput() {
        errorMail.style.display = 'block';
        errorMail.style.color = 'red'
        errorMail.textContent = 'Введен не коректный Email';
    }
    function postMail() {
        errorMail.style.display = 'block';
        errorMail.style.color = 'green';
        errorMail.textContent = 'Спасибо! Мы скоро с Вами свяжемся';

        setTimeout(() => { errorMail.style.display = 'none' }, 2000)
    }

    btnMail.addEventListener('click', (e) => {
        e.preventDefault();
        const res = inputUser.value;

        if (isEmailValid(res)) {
            console.log(res);
            inputUser.value = '';
            postMail();
        } else {
            errorInput();
        }
    })

    inputUser.addEventListener('input', () => {
        errorMail.style.display = 'none'
    });
}

export default mail;