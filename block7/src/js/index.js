import '../scss/style.scss';


let brandButton = document.querySelector('.section-button_brand');
let typesButton = document.querySelector('.section-button_types');
let textButton = document.querySelector('.section-button_text');
let wrapperActiveBrand = document.querySelector('.swiper__wrapper_brand');
let wrapperActiveTypes = document.querySelector('.swiper__wrapper_types');
let wrapperText = document.querySelector('.section__text-box');
let modal = document.querySelector('.modal');
let asideBurger = document.querySelector('.burger');
let asideCall = document.querySelector('.aside_call');
let asideChat = document.querySelector('.aside_feedback');
let buttonBurger = document.querySelectorAll('.template-icon_burger');
let buttonCall = document.querySelectorAll('.template-icon_call');
let buttonChat = document.querySelectorAll('.template-icon_feedback');
let closeButton = document.querySelectorAll('.template-icon_close');



let openModal = () => {
    modal.classList.add('modal_active');
    document.body.classList.add('modal-active');
}

let closeModal = () => {
    modal.classList.remove('modal_active');
    asideChat.classList.remove('aside_active');
    asideCall.classList.remove('aside_active');
    asideBurger.classList.remove('burger_active');
    document.body.classList.remove('modal-active');
}

let openCallWindow = () => {
    openModal();
    asideCall.classList.toggle('aside_active');    
}

let openBurgerWindow = () => {
    openModal();
    asideBurger.classList.toggle('burger_active');
}

let openChatWindow = () => {
    openModal();
    asideChat.classList.toggle('aside_active'); 
}

let showMoreBrand = () => {
    wrapperActiveBrand.classList.toggle('swiper__wrapper_active');
    brandButton.classList.toggle('section-button_active');
}

let showMoreType = () => {
    wrapperActiveTypes.classList.toggle('swiper__wrapper_active');
    typesButton.classList.toggle('section-button_active');
}

let showMoreText = () => {
    wrapperText.classList.toggle('section__text-box_active');
    textButton.classList.toggle('section-button_active');
}

buttonBurger.forEach(btn => {
    btn.addEventListener('click', openBurgerWindow)
});

buttonCall.forEach(btn => {
    btn.addEventListener('click', openCallWindow)
});

buttonChat.forEach(btn => {
    btn.addEventListener('click', openChatWindow)
});

closeButton.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

brandButton.addEventListener('click', showMoreBrand);
typesButton.addEventListener('click', showMoreType);
textButton.addEventListener('click', showMoreText);
modal.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
        if(event.code == 'Escape'){
            closeModal();
        }
}) 
//document.addEventListener('click', closeModal);

const mySlider = document.querySelector('.swiper');
const sliderTypes = document.querySelector('.swiper_types');
const sliderPrice = document.querySelector('.section-table');
let wrapper = document.querySelector('.section-table__body');

let initSwiper = (slider, sliderItem) => {
    let swiper = new Swiper ( slider, {
        slidesPerView: 1,
        width: 240,
        spaceBetween: 16,
        slideClass: sliderItem,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            768: {
                enabled: false
            }
        },
    });
}

initSwiper(mySlider, 'swiper__item');
initSwiper(sliderTypes, 'swiper__item');
initSwiper(sliderPrice, 'section-table__row');

// let swiper = new Swiper ( mySlider, {
//     slidesPerView: 1,
//     width: 240,
//     spaceBetween: 16,
//     slideClass: 'swiper__item',
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },
//     breakpoints: {
//         768: {
//             enabled: false
//         }
//     },
// });

// let swiperTypes = new Swiper ( sliderTypes, {
//     slidesPerView: 1,
//     width: 240,
//     spaceBetween: 16,
//     slideClass: 'swiper__item',
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },
//     breakpoints: {
//         768: {
//             enabled: false
//         }
//     },
// });

// let swiperPrice = new Swiper ( sliderPrice, {
//     slidesPerView: 1,
//     width: 290,
//     spaceBetween: 16,
//     slideClass: 'section-table__row',
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },
//     breakpoints: {
//         768: {
//             enabled: false,
//         }
//     },
// });

function mobileSlider() {
    /*
    if (window.innerWidth < 768 && mySlider.dataset.mobile == "false") {
        swiper = new Swiper ( mySlider, {
            slidesPerView: 1,
            width: 240,
            spaceBetween: 16,
            slideClass: 'swiper__item',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
        mySlider.dataset.mobile = 'true';
    }*/
    if (window.innerWidth >=768) {
        mySlider.dataset.mobile = 'false';
        if (mySlider.classList.contains('swiper-initialized')){
            swiper.destroy(true, true);
            swiperTypes.destroy(true, true);
            swiperPrice.destroy(true, true);
            if(wrapper.classList.contains('swiper-wrapper')){
                wrapper.classList.remove('swiper-wrapper')
            }
        }
    }
}

mobileSlider();

// window.addEventListener('resize', () => {
//     mobileSlider();
// });