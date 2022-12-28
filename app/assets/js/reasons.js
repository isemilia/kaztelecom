window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.reasons-swiper', {
        loop: true,
        slidesPerView: 1,
        slideActiveClass: 'reasons-slide--active',
        slideNextClass: 'reasons-slide--next',
        slidePrevClass: 'reasons-slide--prev',

        speed: 500,

        breakpoints: {
            1200: {
                slidesPerView: 5,
                slidesPerGroup: 1,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
            576: {
                slidesPerView: 3,
            },
            375: {
                slidesPerView: 2,
            },
        },
      
        // If we need pagination
        pagination: {
          el: '.reasons-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.reasons-btn--next',
          prevEl: '.reasons-btn--prev',
        },
    });
})