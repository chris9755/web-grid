// to-top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset > 1200){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
  })





const nav = document.querySelector('.nav-items')

document.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  }
})




