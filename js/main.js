// пишем функцию для табов
let tab = function () {
  // создаем переменные
  let tabNav = document.querySelectorAll(".recomended-info__item"),
    tabContent = document.querySelectorAll(".recomended-image"),
    tabName;
  // tabNav = объект с классом .recomended-info__item
  // tabContent = объект с классом .recomended-image
  // tabName = переменная для записи имени таба, на который кликнем
  // создаем слушатель, если будет клик по элементу,
  // то выполнится функция selectTabNav
  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  // функция selectTabNav
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }
  // функция selectTabContent
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};
tab();
new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
new Swiper(".doc-slider__container", {
  loop: true,
  navigation: {
    nextEl: ".doc-slider__next",
    prevEl: ".doc-slider__prev",
  },
  keyboard: { enabled: !0, onlyInViewport: !1 },
  effect: "coverflow",
});
// BOOKMARK
let bookmark = function () {
  let flag = document.querySelectorAll(".flag");
  flag.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("flag-active");
    });
  });
};
bookmark();
