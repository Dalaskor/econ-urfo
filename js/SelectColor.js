const links = document.querySelectorAll(".colorinp__colorlink");
const buttons = document.querySelectorAll(".colorinp__cancel");

for (let i = 0; i < links.length; i++){
    links[i].addEventListener("click", function() {
        if (links[i].classList.contains('colorinp__colorlink_active') === false) {
            links[i].classList.toggle("colorinp__colorlink_active");
            buttons[i].classList.toggle("colorinp__cancel_active");
        }
    });
    buttons[i].addEventListener("click", function() {
        if (links[i].classList.contains('colorinp__colorlink_active')) {
            links[i].classList.toggle("colorinp__colorlink_active");
            buttons[i].classList.toggle("colorinp__cancel_active");
        }
    });
}
