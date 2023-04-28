// to-top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset > 1200){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
  })





const mobileNav = document.querySelector('.nav-items')
const navBtn = document.querySelector('.nav-btn');




navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle('active');
  navBtn.classList.toggle('active');
}
)

// const nav = document.querySelector('.nav-items')

// document.addEventListener('click', () => {
//   if (nav.classList.contains('active1')) {
//     nav.classList.remove('active1')
//   }
// })


document.querySelectorAll('.nav-items').forEach(n => n.addEventListener('click', () => {
  navBtn.classList.remove('active');
  mobileNav.classList.remove('active');
}))



