import 'bootstrap';
import $ from "jquery";
import Swiper from 'swiper'





// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
              $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });


              let pressThumbs = new Swiper(".press-thumbs", {
                spaceBetween: 10,
                slidesPerView: 5,

                watchSlidesVisibility: true,
                watchSlidesProgress: true,
              })

              let pressQuotes = new Swiper(".press-quotes", {
                thumbs: {
                    swiper: pressThumbs,
                    slideThumbActiveClass: 'press-thumb-active'
                  },
                  effect: 'fade',
                  fadeEffect: {
                    crossFade: true
                  },
                autoplay: {
                  delay: 3000,
                },
              });

            });
});