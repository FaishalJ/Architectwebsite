const btnMenu = document.querySelector('.btn__menu'),
  btnClose = document.querySelector('.btn__close'),
  nav = document.querySelector('.navigation'),
  loader = document.querySelector('.overlay'),
  banner = document.querySelector('.banner');

// EVENT LISTENERS
const preLoader = function() {
  const timeOut = setTimeout(() => {
    loader.remove()
    banner.style.backgroundSize = `${100}%`;

    clearTimeout(timeOut)
  }, 4000)
}
preLoader();
// .......................
btnMenu.addEventListener('click', () => {
  nav.classList.add('show');
  btnClose.classList.add('left');
  btnMenu.classList.remove('right');
})
// .......................
btnClose.addEventListener('click', () => {
  nav.classList.remove('show');
  btnMenu.classList.add('right');
  btnClose.classList.remove('left');
})