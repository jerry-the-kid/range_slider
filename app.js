const price = document.querySelector('.card__price');
const cardSlider = document.querySelector('.card__slider');
const cardToggle = document.querySelector('.card__toggle');
let pressed = false;
let value = +cardSlider.value;
console.log(cardSlider);

const updatePrice = function (value, pressed) {
  const valueChange = pressed ? value * 12 * 0.75 : value;
  price.textContent = `$ ${valueChange.toFixed(2)}`;
};

const toggle = function () {
  pressed ? (pressed = false) : (pressed = true);
  cardToggle.setAttribute('aria-pressed', pressed);
  updatePrice(value, pressed);
};

cardSlider.addEventListener('input', function () {
  value = +this.value;
  const percent = (value / this.max) * 100;

  updatePrice(value, pressed);
  this.style.backgroundImage = `linear-gradient(
    90deg,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${percent}%,
    hsl(224, 65%, 95%) ${percent}%
  )`;
});

cardToggle.addEventListener('click', toggle);
cardToggle.addEventListener('keypress', function (e) {
  if (e.charCode === 32 || e.keyCode === 13) {
    toggle();
  }
});
