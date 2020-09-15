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
