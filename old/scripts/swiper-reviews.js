import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});