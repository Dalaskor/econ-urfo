const btnMenuOpen = document.getElementById('btnMMenuOpen');
const bntMenuClose = document.getElementById('btnMMenuClose');
const mainMenuView = document.getElementById('mainMenuView');

btnMenuOpen.addEventListener('click', function() {
    if (mainMenuView.classList.contains('active') === false) {
        mainMenuView.classList.toggle('active');
        document.getElementById('body').classList.toggle('scroll-lock');
    }
});
bntMenuClose.addEventListener('click', function() {
    if (mainMenuView.classList.contains('active')) {
        mainMenuView.classList.toggle('active');
        document.getElementById('body').classList.toggle('scroll-lock');
    }
});
