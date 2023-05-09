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



const navItems = document.querySelectorAll('.nav-items');

navItems.forEach(item => {
  
  item.addEventListener('click', () => {
      navBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      
  });
});


// document.addEventListener("click", ()=>{
//   if(navItems.classList.contains("active")){
//     navItems.classList.remove("active")
//   }
// })