const nav = document.querySelector('.nav-items')

document.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  }
})



