const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: 4,
   grabCursor: true,


   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

const swiper2 = new Swiper('.swiper2', {
   loop: true,
   centeredSlides: true,
   slidesPerView: 1,
   grabCursor: true,


   pagination: {
      el: ".swiper-pagination2",
   },
});


const animItems = document.querySelectorAll('._anim__item');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            animItem.classList.remove('_active');
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
         scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);

}