const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
  if (event.target.value.length !== Number(event.target.dataset.length)) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
    return;
  }
  event.target.classList.add('valid');
  event.target.classList.remove('invalid');
});
