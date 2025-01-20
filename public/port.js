var navIcons = document.querySelectorAll('.dropbox'); // Select all elements with the 'dropbox' class
const navMenu = document.querySelector(".nav-menu");

navIcons.forEach(function (icon) { // Loop through each element in the NodeList
  icon.addEventListener('click', function () {
    navMenu.classList.toggle("active"); // Toggle the 'active' class on the navMenu
  });
});

