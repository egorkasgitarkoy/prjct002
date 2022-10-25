const formElement = document.getElementById('form'); // извлекаем элемент формы
const popup = document.querySelector('.popup-alert');
const closeButton = document.querySelector('.popup__close-button');

function openPopup() {
    popup.classList.add('popup_opened');
}
function closePopup() {
    popup.classList.remove('popup_opened');
    formElement.reset(); // сбрасываем значения формы при закрытии попапа
}
closeButton.addEventListener('click', closePopup); // навешиваем listener по крестику

formElement.addEventListener('submit', (event) => {  // listener по сабмиту формы
    event.preventDefault(); // отменяем стандартную отправку формы
    openPopup();
    const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные из формы
    const fruit = formData.get('fruit');
    const number = formData.get('number');
    const radio = formData.get('radio');

    document.getElementById("text").innerHTML = `${radio} доставить ${number} ${declOfNum(number, ['штуку', 'штуки', 'штук'])} ${fruit}`; // подставляем в попап
});

function declOfNum(n, titles) { // склонение окончаний
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
}
