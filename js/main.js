(() => {
  const buttons = document.querySelectorAll('.slider-pagination-button'); //находим все кнопки, с которыми будем взаимодействовать, передав css-селектор в метод
  const body = document.querySelector('body');

  if (!buttons.length) return; //если на странице нет кнопок, останавливаем выполнение скрипта, чтобы не было ошибки

  buttons.forEach((button) => { // перебираем все кнопки и..
      button.addEventListener('click', () => { // добавляем каждой обработчик события по клику и..
          const color = button.dataset.color; // забираем из кликнутой кнопки значение data-атрибута data-color
          body.style.backgroundColor = color; // подставляем его в атрибут style для body
      })
  })
})();
