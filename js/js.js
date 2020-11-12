
//переключаю класс при клике на заголовок списка
$(".panel-heading").on("click", function () {
    $(this).toggleClass('active');
});


// Валидация
// Запрет на введение букв в поле телефоного номера
document.getElementById('checkNumber').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}
