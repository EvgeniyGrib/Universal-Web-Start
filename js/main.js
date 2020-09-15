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
// ========== BOOKMARK ==========
let bookmark = function () {
  let flag = document.querySelectorAll(".flag");
  flag.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("flag-active");
    });
  });
};
bookmark();
// ========== MENU ==========
document
  .querySelector(".header-top__menu")
  .addEventListener("click", function () {
    document
      .querySelector(".header-top__menu_active")
      .classList.toggle("header-top__menu_visible");
  });
// =========== SEARCH ============
document
  .querySelector(".header-top__search_active")
  .addEventListener("click", function () {
    document
      .querySelector(".header-top__search_visible")
      .classList.toggle("header-top__search_toggle");
    document
      .querySelector(".header-bottom")
      .classList.toggle("header-bottom__toggle");
  });
// ========== Loading comments ==========
document
  .querySelector(".comments__load")
  .addEventListener("click", function () {
    document
      .querySelector(".comments__item_load")
      .classList.add("comments__item_loading");
    document
      .querySelector(".comments__load")
      .classList.add("comments__load_none");
  });
// ========= Обработка форм ============
$(".comments__user_form").validate({
  errorClass: "invalid",
  rules: {
    message: {
      required: true,
      minlength: 100,
    },
  },
  messages: {
    message: {
      required: "Please, enter your message",
      minlength: "Your message must be 100 characters long",
    },
  },
});
// Обработка форм майл
$(".form1").validate({
  errorClass: "invalid",
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  },
});
$(".form2").validate({
  errorClass: "invalid",
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  },
});
