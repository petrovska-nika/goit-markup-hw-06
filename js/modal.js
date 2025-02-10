(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Закриття меню при кліку на посилання
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Закриваємо меню при натисканні на пункт
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
});
