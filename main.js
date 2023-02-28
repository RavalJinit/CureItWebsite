const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav_btn');
const closeNavBtn = document.querySelector('#close__nav_btn');

openNavBtn.addEventListener('click', () => {
  navItems.style.display='flex';
  openNavBtn.style.display='none';
  closeNavBtn.style.display='inline-block';
});

const closeNav = ()=>{
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}

closeNavBtn.addEventListener('click', closeNav);

// close nav menu 
if(window.innerWidth<1024){
  document.querySelectorAll('#nav-Item li a').forEach(navItems =>{
    navItems.addEventListener('click',()=>{
      closeNav();
    })
  })
}



// testimonial section (swiper js)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
// responsive breackpoint

breakpoint:{
  // when width is >1024
  600:{
    slidesPerView: 2
  },
  1024:{
    slidesPerView: 3
  }
}
});