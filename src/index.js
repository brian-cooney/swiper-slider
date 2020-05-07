import "bootstrap";
import $ from "jquery";
import Swiper from "swiper";

// JQuery
$(document).ready(() => {
  // bootstrap tooltips
  $(() => {
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });

    let pressThumbs = new Swiper(".press-thumbs", {
      spaceBetween: 10,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });

    let pressQuotes = new Swiper(".press-quotes", {
      thumbs: {
        swiper: pressThumbs,
        slideThumbActiveClass: "press-thumb-active",
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
      },
    });


    $('.shopAccordion__wrapper').click(function () {
      $(this).toggleClass('shopAccordion__rotate')
      $(this)
        .find('.shopAccordion__content')
        .slideToggle('fast')
      $('.shopAccordion__svg').toggleClass('shopAccordion__rotate')
    })


  });
});
