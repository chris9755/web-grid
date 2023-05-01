// to-top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset > 1500){
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

// document.onclick = function(e){
//   if('.nav-items'.contains(e.target) && '.nav-btn'.contains(e.target))
//   mobileNav.classList.remove('active');
//   navBtn.classList.remove('active');
// }





// document.querySelectorAll('.nav-items').addEventListener('click', () => {
//   navBtn.classList.remove('active');
//   mobileNav.classList.remove('active');
// })



