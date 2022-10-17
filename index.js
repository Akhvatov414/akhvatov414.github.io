let brandArr = [
    {name: 'Lenovo', imageUrl: './assets/img/brands/lenovo.svg', textAlt: 'Леново'},
    {name: 'Samsung', imageUrl: './assets/img/brands/samsung.svg', textAlt: 'Самсунг'},
    {name: 'Apple', imageUrl: './assets/img/brands/apple.svg', textAlt: 'Эпл'},
    {name: 'ViewSonic', imageUrl: './assets/img/brands/viewsonic.svg', textAlt: 'ВьюСоник'},
    {name: 'Bosch', imageUrl: './assets/img/brands/bosch.svg', textAlt: 'Бош'},
    {name: 'HP', imageUrl: './assets/img/brands/hp.svg', textAlt: 'ЭйчПи'},
    {name: 'Acer', imageUrl: './assets/img/brands/acer.svg', textAlt: 'Эйсер'},
    {name: 'Sony', imageUrl: './assets/img/brands/sony.svg', textAlt: 'Сони'},
    {name: 'Lenovo-2', imageUrl: './assets/img/brands/lenovo.svg', textAlt: 'Леново'},
    {name: 'Samsung-2', imageUrl: './assets/img/brands/samsung.svg', textAlt: 'Самсунг'},
    {name: 'Apple', imageUrl: './assets/img/brands/apple.svg', textAlt: 'Эпл'},
]

//Переменные для расчета ширины и высоты окна браузера
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;
//Переменные для выбора селекторов, куда будет добавляться свайпер
let swiperAdd = document.querySelector('.swiper-box__navbar');
let swiperWrapperAdd = document.querySelector('.swiper-box__list');
let actionButton = document.querySelector('.swiper-box__button');


let addElement = (tagName, className) => {
    let el = document.createElement(tagName);
    el.classList.add(className);

    return el;
}

let swiperPaginationAdd = addElement('div', 'swiper-pagination');

let addBrand = (brand) => {
    //Добавляем li для бренда. swiper__item сделать флексом
    let listItem = addElement('li', 'swiper-box__item');
    let el = addElement('a', 'swiper-box__element')
    //Добавляем иконку бренда в тег li 
    let image = addElement('img', 'swiper-box__img');
    image.src = brand.imageUrl;
    image.alt = brand.textAlt;
    listItem.appendChild(el);
    //listItem.classList.add('swiper-slide')
    el.appendChild(image);
    //Добавляем кнопку в контейнер с иконкой бренда
    let buttonItem = addElement('div', 'swiper-box__btn');
    let icon = addElement('img', 'icon');
    icon.src = './assets/img/button/dropdown.svg'
    el.appendChild(buttonItem);
    buttonItem.appendChild(icon);
    
    return listItem;
}

let brandList = document.querySelector('.swiper-box__list');
let swiperSlideAdd = document.querySelector('.swiper-box__item');
for (let i = 0; i < brandArr.length; i++) {
    let brandItem = addBrand(brandArr[i]);
    brandList.appendChild(brandItem);
}

let showMoreButton = () => {
    if(swiperAdd.classList.contains('swiper-box__navbar_hidden')) {
        swiperAdd.classList.remove('swiper-box__navbar_hidden');
        swiperAdd.classList.add('swiper-box__navbar_active');
        actionButton.textContent = 'Скрыть';
    }     
}

let hideButton = () => {
    if(swiperAdd.classList.contains('swiper-box__navbar_active')) {
        swiperAdd.classList.remove('swiper-box__navbar_active');
        swiperAdd.classList.add('swiper-box__navbar_hidden');
        actionButton.textContent = 'Показать больше';
    }
}

let workButton = () => {
        if(swiperAdd.classList.contains('swiper-box__navbar_hidden')){
            showMoreButton();
        } else {
            hideButton();
        }
}

actionButton.addEventListener('click', workButton);