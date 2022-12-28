window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.reviews-swiper', {
        loop: true,
        slidesPerView: 1,
        slideActiveClass: 'reviews-slide--active',
        slideNextClass: 'reviews-slide--next',
        slidePrevClass: 'reviews-slide--prev',
        centeredSlides: true,

        speed: 500, 
      
        // If we need pagination
        pagination: {
          el: '.reviews-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.reviews-btn--next',
          prevEl: '.reviews-btn--prev',
        },
    });
})