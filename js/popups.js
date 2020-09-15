const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let myVideo = document.querySelector(".popup__video");
let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup");
    if (popupActive) {
      popupClose(popupActive, false);
      document
        .getElementById("ifParrent")
        .insertAdjacentHTML(
          "afterend",
          '<iframe id="iframe" class="popup__video" src = "https://www.youtube.com/embed/yUFm1dCIUxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
        document.getElementById("iframe").remove();
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
  }
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

function pause_or_play() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    myVideo.pause();
  } else {
    myVideo.play();
  }
}

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
