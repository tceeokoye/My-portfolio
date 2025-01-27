document.addEventListener("DOMContentLoaded", () => {
  // Sticky Header
  const mainHeader = document.querySelector(".main-header");
  const dropHeader = document.querySelector(".drop-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      // Show the main header only when scrolled to the very top
      mainHeader.style.transform = "translateY(0)";
      dropHeader.style.transform = "translateY(-100%)";
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down
      mainHeader.style.transform = "translateY(-100%)";
      dropHeader.style.transform = "translateY(0)";
    } else {
      // Scrolling up
      mainHeader.style.transform = "translateY(-100%)";
      dropHeader.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });


  // Progress Bar Animation
  const skills = [
    { selector: ".percentage", value: 90 },
    { selector: ".percentage1", value: 80 },
    { selector: ".percentage2", value: 70 },
    { selector: ".percentage3", value: 60 },
  ];

  const animateProgress = () => {
    skills.forEach((skill) => {
      const element = document.querySelector(skill.selector);
      const percentageText = element.previousElementSibling.querySelector(".perc");
      const targetValue = skill.value;

      element.style.transition = "width 3s ease-out";
      element.style.width = `${targetValue}%`;

      let currentPercentage = 0;
      const updateInterval = 3000 / targetValue;
      const interval = setInterval(() => {
        if (currentPercentage <= targetValue) {
          percentageText.textContent = `${currentPercentage}%`;
          currentPercentage++;
        } else {
          clearInterval(interval);
        }
      }, updateInterval);
    });
  };

  const section = document.querySelector(".section3Flex");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgress();
          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (section) {
    observer.observe(section);
  }
});


//   let swiper2 = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//   spaceBetween: 40,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

//my projects...................

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4, // Default for desktop
  spaceBetween: 30, // Space between slides
  centeredSlides: false, // Default behavior
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Mobile view
    0: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // Tablet view
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    // Desktop view
    1024: {
      slidesPerView: 4,
    },
  },
});
