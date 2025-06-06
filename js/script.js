// // Header scroll
const header = document.querySelector('header');
if(header){

  function fixHeaderOnScroll() {
    
      if (window.scrollY >= 1) {
          header.classList.add('fixed');
      } else {
          header.classList.remove('fixed');
      }
  }
  window.addEventListener('scroll', fixHeaderOnScroll);
  fixHeaderOnScroll();
}
  

// // Header menu
const headerBurger = document.querySelector('.header-burger');
let scrollPosition = 0;

if(headerBurger){

  headerBurger.addEventListener('click', () => {
      if (document.body.classList.contains('menu-is-open')) {
          document.body.classList.remove('menu-is-open');
          window.scrollTo({top: scrollPosition, behavior: 'auto'});
      } else {
          scrollPosition = window.scrollY;
          document.body.classList.add('menu-is-open');
      }
  });
    
  window.addEventListener('resize', () => {
      document.body.classList.remove('menu-is-open');
  });
}

// Swipper slider
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    loopedSlides: 4,
    loop: false,

    pagination: {
      el: '.swiper-pagination',
    },
});

var thumbs = new Swiper ('.tabs', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: false,
  slideToClickedSlide: true,
});

swiper.controller.control = thumbs;
thumbs.controller.control = swiper;

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,

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

// slider image text
const swiper3 = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      slidesPerView: 2,
        1024: {
            slidesPerView: 4
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

//faq
const questions = document.querySelectorAll('.faq-item');
if(questions){    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            if (question.classList.contains('active')) {
                question.classList.remove('active');
            } else {
                questions.forEach(item => {
                    if (item !== question) {
                        item.classList.remove('active');
                    }
                });
                question.classList.add('active');
            }
        });
    });
}

//
document.querySelectorAll('[id="select-tags"]').forEach(select => {
    new TomSelect(select, {
        // sortField: {
        //     field: "text",
        //     direction: "asc"
        // },
        render: {
            item: function (item, escape) {
                let icon = item.$option.dataset.icon;
                let div = document.createElement("div");
                div.innerHTML = icon;
                return `<div><span>${escape(item.text)}</span>${div.innerHTML} </div>`;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#datepicker", {
        dateFormat: "d-m-Y",
        locale: "pt",
        allowInput: true,
    });
});

const swiperLogo = new Swiper('.swiper-logo', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 600,
      },
      speed: 1000,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        768: {
            slidesPerView: 5,
            spaceBetween: 20
          },
        1024: {
            slidesPerView: 7, 
            spaceBetween: 70
          }
    },
});