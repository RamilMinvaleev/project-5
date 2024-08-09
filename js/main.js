$(function () {

  $('.footer__title').on('click', function () {
    $(this).next().slideToggle();

  });

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();

  });


  $('.burger').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });

  $(".product-page__icon-star").rateYo({
    readOnly: true,
    spacing: "10px",
    starWidth: "23px",
    normalFill: "#C4C4C4",
    ratedFill: "#1C62CD",
  });

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-card, .catalog__inner-item').removeClass('product-card--line');

  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-card, .catalog__inner-item').addClass('product-card--line');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });


  $('.aside-filter__title-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('aside-filter__title-drop--active');
    $(this).next().slideToggle(100);
  });


  $('.filter-styler').styler();


  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="images/icon/icon-arrow-left.svg" alt=""></button>',
    nextArrow: '  <button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="images/icon/icon-arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  });


  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.products-slider__list').slick('setPosition');

  });

  $('.product-card__favorite').on('click', function () {
    $(this).toggleClass('product-card__favorite--active')
  });

});


$('.products-slider__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="products-slider__list-btn products-slider__list-btn--prev"><img src="images/icon/icon-arrow-black-left.svg" alt=""></button>',
  nextArrow: '<button class="products-slider__list-btn products-slider__list-btn--next"><img src="images/icon/icon-arrow-black-right.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 1301,
      settings: {
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});