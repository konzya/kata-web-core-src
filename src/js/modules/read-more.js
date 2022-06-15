let readMoreButtons = document.querySelectorAll('.read-more');
let expandableElements = document.querySelectorAll('.expandable');

export function readMoreInit() {
  for (let i = 0; i < readMoreButtons.length; i++) {
    let readMoreButton = readMoreButtons[i];
    let expandableElement = expandableElements[i];
    let readMoreButtonText = readMoreButton.textContent;
    let clientHeight = expandableElement.style.maxHeight;

    let ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        let needWidth = entry.target.scrollHeight;
        entry.target.style.maxHeight = needWidth + 'px';
      }
    });

    readMoreButton.addEventListener('click', function () {
      readMoreButton.classList.toggle('read-more--open');
      if (readMoreButton.classList.contains('read-more--open')) {
        ro.observe(expandableElement);
      } else {
        ro.unobserve(expandableElement);
        expandableElement.style.maxHeight = clientHeight;
      }

      readMoreButton.textContent = readMoreButton.textContent === readMoreButtonText ? 'Скрыть' : readMoreButtonText;
    });
  }
}
