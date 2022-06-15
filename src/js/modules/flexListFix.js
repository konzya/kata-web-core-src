let mediaColumn3 = window.matchMedia('(min-width: 768px) and (max-width: 1015px), (min-width: 1200px) and (max-width: 1439px)');
let mediaColumn4 = window.matchMedia('(min-width: 1016px) and (max-width: 1199px), (min-width: 1440px)');
let needFixLists = document.querySelectorAll('ul.swiper-wrapper');

function delItems(list) {
  let needDel = Number(list.dataset.needDel);

  while (needDel) {
    list.lastElementChild.remove();
    needDel--;
  }
}

function addItems(list, columns) {
  delItems(list);
  let children = list.children;
  let needRows = Math.ceil(children.length / columns);
  let needItems = needRows * columns;
  let needAdd = needItems - children.length;
  list.dataset.needDel = needAdd;
  while (needAdd) {
    let clone = children[0].cloneNode(false)
    list.append(clone);
    needAdd--;
  }
}

function fixLists(media, columns) {
  if (media.matches) {
    for (let list of needFixLists) {
      addItems(list, columns);
    }
  }

  media.addEventListener('change', function (m) {
    if (m.matches) {
      for (let list of needFixLists) {
        addItems(list, columns);
      }
    }
  });
}


export function flexListFix() {
  fixLists(mediaColumn3, 3);
  fixLists(mediaColumn4, 4);
}
