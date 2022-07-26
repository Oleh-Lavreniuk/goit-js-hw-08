import throttle from 'lodash.throttle';

console.log('Hello MENTOR, and thanks for watching!');

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(setLocalData, 500));
const formData = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

formRef.addEventListener('submit', onClickSubmit);

function setLocalData({ target }) {
  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getLocalData() {
  const localKey = localStorage.getItem('feedback-form-state');

  if (localKey) {
    const getlocalKey = JSON.parse(localKey);

    if (getlocalKey.email) {
      formRef.elements.email.value = getlocalKey.email;
    }
    if (getlocalKey.message) {
      formRef.elements.message.value = getlocalKey.message;
    }
  }
}
getLocalData();

function onClickSubmit(ev) {
  ev.preventDefault();

  const email = ev.currentTarget.elements.email.value;
  const message = ev.currentTarget.elements.message.value;

  if (email === '' || message === '') {
    return alert('Всі поля мають бути заповнені!!!');
  }

  console.log(
    'getLocalKey',
    JSON.parse(localStorage.getItem('feedback-form-state'))
  );

  ev.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
