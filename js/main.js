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




// document.querySelectorAll('.nav-items').addEventListener('click', () => {
//   navBtn.classList.remove('active');
//   mobileNav.classList.remove('active');
// })



