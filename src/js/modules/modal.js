let html = document.documentElement;
let modals = document.querySelectorAll('.modal');
let modalCounter = 0;
let scrollPosition;

function unfreezePage() {
  html.classList.remove('page--freeze');
  window.scrollTo(0, scrollPosition);
  html.style.top = "";
  html.style.marginRight = ""
}


export function modalInit() {
  for (let modal of modals) {
    let buttons = document.querySelectorAll(modal.dataset.button)
    let modalContent = modal.firstElementChild;
    let closeButtons = modalContent.querySelectorAll('.button--type--close')

    function closeModal() {
      modal.classList.remove('modal--open');
      if (modalCounter < 2) {
        unfreezePage()
      }
      modalCounter--;
    }

    if (modal.dataset.button === '.button--type--burger') {
      let dekstopMedia = window.matchMedia('(min-width: 1200px)');
      dekstopMedia.addEventListener('change', function (media) {
        if (media.matches && modal.classList.contains('modal--open')) {
          closeModal()
        }
      })
    }

    for (let button of buttons) {
      button.addEventListener('click', function () {
        let marginSize = window.innerWidth - html.clientWidth;
        if (marginSize) {
          html.style.marginRight = marginSize + "px";
        }
        scrollPosition = window.pageYOffset;
        html.style.top = -scrollPosition + "px";
        modal.classList.add('modal--open');
        html.classList.add('page--freeze');
        modalCounter++;
      })
    }

    for (let button of closeButtons) {
      button.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', closeModal);

    modalContent.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }
}
