window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.useful-swiper', {
        loop: true,
        slidesPerView: 1,
        slideActiveClass: 'useful-slide--active',
        slideNextClass: 'useful-slide--next',
        slidePrevClass: 'useful-slide--prev',
        centeredSlides: true,

        speed: 500,

        breakpoints: {
            768: {
                slidesPerView: 3
            },
        },
      
        // If we need pagination
        pagination: {
          el: '.useful-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.useful-btn--next',
          prevEl: '.useful-btn--prev',
        },
    });
})