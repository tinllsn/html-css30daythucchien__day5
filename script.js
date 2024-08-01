var btn = document.querySelector('.search-box__button');
var input = document.querySelector('.search-box');

console.log(btn);
console.log(input);
btn.addEventListener('click', function () {
    input.classList.toggle('open');
    this.previousElementSibling.focus();
});