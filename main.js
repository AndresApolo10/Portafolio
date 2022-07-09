const iconBurger = document.querySelector("#icon_burger");
const menu = document.querySelector("#menu");

iconBurger.addEventListener("click", function () {
    menu.classList.toggle("show__menu");
});