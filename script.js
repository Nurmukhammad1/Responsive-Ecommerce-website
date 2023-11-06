// TESTIMONIALS

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

//   NAVBAR

  const navList = document.querySelector('.navlist');
  const menuBtn = document.querySelector('.ri-menu-2-fill');

  menuBtn.onclick = function(){
    navList.classList.toggle('active');
    menuBtn.classList.toggle("ri-arrow-up-double-line");
  }


//   SCROLLREVEAL


const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:200,
    reset:false,
});

sr.reveal('.home-container .right .col-2', {origin:'right'});
sr.reveal('.home-container .right .col-1', {origin:'top'});
sr.reveal('.home .left', {origin:'left'});
sr.reveal('.feature-container', {origin:'left'});
sr.reveal('.banner-container .left', {origin:'bottom'});
sr.reveal('.banner-container .right ', {origin:'top'});
sr.reveal('.shop-container', {origin:'top'});
sr.reveal('.contact-container .right ', {origin:'left'});
sr.reveal('.footer-container', {origin:'top'});