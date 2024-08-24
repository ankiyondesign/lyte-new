document.addEventListener("DOMContentLoaded", () => {
  // Function to handle animations when the second section comes into view
  function handleFruitIntersection(entries) {
    entries.forEach((entry) => {
      const section = entry.target;
      const image = section.querySelector("img");
      const texts = section.querySelectorAll("h2, p, span");

      if (entry.isIntersecting) {
        // Apply animations to image and texts
        image.classList.add("image-pop-in");
        texts.forEach((text) => text.classList.add("text-pop-in"));
      } else {
        // Remove animations from image and texts
        image.classList.remove("image-pop-in");
        texts.forEach((text) => text.classList.remove("text-pop-in"));
      }
    });
  }

  // Create an IntersectionObserver to observe the second section
  const observer2 = new IntersectionObserver(handleFruitIntersection, {
    threshold: 0.5, // Trigger when 10% of the section is in view
  });

  // Select the second section to observe
  const fruitSection = document.getElementById("fruit-section");

  // Start observing the second section
  observer2.observe(fruitSection);
});

document.addEventListener("DOMContentLoaded", () => {
  // Function to handle animations when the third section comes into view
  function handleProductIntersection(entries) {
    entries.forEach((entry) => {
      const section = entry.target;
      const image = section.querySelector("img");
      const texts = section.querySelectorAll("h2, p, span");

      if (entry.isIntersecting) {
        // Apply animations to image and texts
        image.classList.add("image-slide-in");
        texts.forEach((text) => text.classList.add("text-slide-in"));
      } else {
        // Remove animations from image and texts
        image.classList.remove("image-slide-in");
        texts.forEach((text) => text.classList.remove("text-slide-in"));
      }
    });
  }

  // Create an IntersectionObserver to observe the third section
  const observer3 = new IntersectionObserver(handleProductIntersection, {
    threshold: 0.5, // Trigger when 10% of the section is in view
  });

  // Select the third section to observe
  const productSection = document.getElementById("product-section");

  // Start observing the third section
  observer3.observe(productSection);
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*============ Swiper =============================== */

window.addEventListener("load", function () {
  const swiper = new Swiper(".my-swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      960: {
        slidesPerView: 1,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-link");
  const categoryContents = document.querySelectorAll(".category-content");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all links
      categoryLinks.forEach((link) =>
        link.classList.remove("active", "border-blue-500")
      );
      categoryLinks.forEach((link) =>
        link.classList.add("text-gray-500", "border-transparent")
      );

      // Add active class to the clicked link
      this.classList.add("active", "border-blue-500");
      this.classList.remove("text-gray-500", "border-transparent");

      // Hide all category contents
      categoryContents.forEach((content) => content.classList.add("hidden"));

      // Show the corresponding category content
      const targetCategory = this.getAttribute("data-category");
      document.getElementById(targetCategory).classList.remove("hidden");
    });
  });
});
