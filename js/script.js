// // Header scroll
// function fixHeaderOnScroll() {
//     const header = document.querySelector('header');
  
//     if (window.scrollY >= 1) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }
// }
  
// window.addEventListener('scroll', fixHeaderOnScroll);
// fixHeaderOnScroll();

// // Header menu
// const headerBurger = document.querySelector('.header-burger');
// let scrollPosition = 0;

// headerBurger.addEventListener('click', () => {
//     if (document.body.classList.contains('menu-is-open')) {
//         document.body.classList.remove('menu-is-open');
//         window.scrollTo({top: scrollPosition, behavior: 'auto'});
//     } else {
//         scrollPosition = window.scrollY;
//         document.body.classList.add('menu-is-open');
//     }
// });
  
// window.addEventListener('resize', () => {
//     document.body.classList.remove('menu-is-open');
// });



// Swipper slider

var menu = ['Lunteren', 'Garderen', 'Lunteren', 'Garderen']
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },

    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><p>' + (menu[index]) + '</p></span>';
      },
    },
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },

    breakpoints: {
        1024: {
            slidesPerView: 2
          }
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

   pagination: {
    el: '.swiper-pagination',
  },

});