function pageLoad() {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,
    simulateTouch: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    /* scrollbar: {
      el: ".swiper-scrollbar",
    }, */
  });
}

window.addEventListener("load", pageLoad);
