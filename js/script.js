const menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    menu.classList.add('active');
});

closeElem.addEventListener('click', function () {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.stats__counter'),
      lines = document.querySelectorAll('.stats__line');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
