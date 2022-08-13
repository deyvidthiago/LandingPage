const mobileMenu = document.querySelector('.mobile-menu')
const navegation = document.querySelector('.nav-menu')

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  navegation.classList.toggle('active')
})
