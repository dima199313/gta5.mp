//scrooll effects
AOS.init();


//mobile navi
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
burger.addEventListener('click',()=>{
  burger.classList.toggle('active')
  nav.classList.toggle('open')
})