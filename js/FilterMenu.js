const btnFilter = document.getElementById('btnFilters');
const btnFiltersCancel = document.getElementById('btnFiltersCancel');
const btnFiltersApply = document.getElementById('btnFiltersApply');
const sideFilters = document.getElementById('sideFilters');

btnFilter.addEventListener('click', function() {
    if (sideFilters.classList.contains('active') === false) {
        sideFilters.classList.toggle('active');
        document.getElementById('body').classList.toggle('scroll-lock');
    }
});
btnFiltersCancel.addEventListener('click', function() {
    if (sideFilters.classList.contains('active')) {
        sideFilters.classList.toggle('active');
        document.getElementById('body').classList.toggle('scroll-lock');
    }
});
btnFiltersApply.addEventListener('click', function() {
    if (sideFilters.classList.contains('active')) {
        sideFilters.classList.toggle('active');
        document.getElementById('body').classList.toggle('scroll-lock');
    }
});
