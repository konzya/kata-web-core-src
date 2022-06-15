
let swiperBrands;
let swiperRepair;
let swiperPrices;
let init = false;
let swiperMedia = window.matchMedia('(max-width: 767px)');
const swiperSettings = {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 16,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
  },
}

function swiperMode(media) {
  if (media.matches && !init) {
    init = true;
    swiperBrands = new Swiper('.brands', swiperSettings);
    swiperRepair = new Swiper('.repair', swiperSettings);
    swiperPrices = new Swiper('.table', swiperSettings);
  } else if (!media.matches && init) {
    swiperBrands.destroy();
    swiperRepair.destroy();
    swiperPrices.destroy();
    init = false;
  }
}

export function swiperInit() {
  swiperMode(swiperMedia);
  swiperMedia.addEventListener("change", swiperMode);
}
