// import throttle from 'lodash.throttle';

console.log('Hello world');

const formRef = document.querySelector('.feedback-form');
// console.log('formRef', formRef.elements);

formRef.addEventListener('input', onFormInput);
const formData = {};

function onFormInput({ target }) {
  //   const email = formRef.elements.email;
  //   console.log(email);
  //   const message = formRef.elements.message;

  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// 1) Отслеживай на форме событие input, и каждый раз записывай
// в локальное хранилище объект с полями email и message, в
// которых сохраняй текущие значения полей формы.Пусть ключом
// для хранилища будет строка "feedback-form-state".

// 2) При загрузке страницы проверяй состояние хранилища, и если
// там есть сохраненные данные, заполняй ими поля формы.В
// противном случае поля должны быть пустыми.

// 3) При сабмите формы очищай хранилище и поля формы, а также
// выводи объект с полями email, message и текущими их значениями
// в консоль.
