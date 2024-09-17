var navIcons = document.querySelector('.dropbox');
const navMenu = document.querySelector(".nav-menu");

navIcons.addEventListener('click', function () {
    navMenu.classList.toggle("active");
});
