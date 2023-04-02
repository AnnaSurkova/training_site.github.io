const button = document.querySelector('.btn');
const popup = document.querySelector('.popup_container');
const closePopup = document.querySelector('.popup_close');



function openPopup() {
    popup.classList.add('popup_container_opened');
}
function popupClose() {
    popup.classList.remove('popup_container_opened');
}

button.addEventListener('click', openPopup);
closePopup.addEventListener('click', popupClose);