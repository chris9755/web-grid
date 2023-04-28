// to-top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset > 1200){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
  })





const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav-btn');
const allNavItems = document.querySelectorAll('.nav-items')

const handleNav = () =>{
  nav.classList.toggle('.nav-active')
}


navBtn.addEventListener("click", handleNav)




