const form = document.querySelector('.form__send-form');
form.addEventListener('submit', (e) => {
  const inputName = document.querySelector('.form__input--name');
  const name = inputName.value;
  if(/[^A-Za-zа-яА-Я ]/g.test(name)) {
    inputName.classList.add('form__input--invalid');
  } else {
    inputName.classList.remove('form__input--invalid');
  }

  const inputPhone = document.querySelector('.form__input--phone');
  const phone = inputPhone.value;
  if(/[a-zA-Zа-яА-Я]/g.test(phone)) {
    inputPhone.classList.add('form__input--invalid');
  } else {
    inputPhone.classList.remove('form__input--invalid');
  }

  if(inputName.classList.contains('form__input--invalid') || inputPhone.classList.contains('form__input--invalid')) {
    e.preventDefault();
    return false;
  }
});
