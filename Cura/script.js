const parent = document.querySelector('.stroke-accordion__content');
const question = document.querySelector('.stroke-accordion__answer');

parent.addEventListener('click', function (e) {
  if (e.target.closest('.button-plus')) {
    question.classList.toggle('show__text');
  }
});
