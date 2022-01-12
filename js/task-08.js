const formEl = document.querySelector('.login-form');
const formEmailEl = document.querySelector('input[name="email"]');
const formPasswordEl = document.querySelector('input[name="password"]');
const chekFuction=function name(event) {
    event.preventDefault();
    if( formEmailEl.value === '' || formPasswordEl.value === ''){
        return alert('Все поля должны быть заполнены!');
    }
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formInfo = {
        email,
        password,
    };
    console.log(formInfo);
    event.currentTarget.reset();
}
formEl.addEventListener('submit',chekFuction );
