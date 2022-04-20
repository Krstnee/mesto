const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const saveButton = document.querySelector('.form__submit');


function popupOpen() {
    popup.classList.add('popup_opened');
    let name = document.querySelector('.profile__name').textContent;
    let job = document.querySelector('.profile__job').textContent;
    popup.querySelector('.form__input_type_name').value = name;
    popup.querySelector('.form__input_type_job').value = job;
}
editButton.addEventListener('click', popupOpen)

function popupClose(){
    popup.classList.remove('popup_opened')
}
closeButton.addEventListener('click', popupClose)



let form = popup.querySelector('.form_type_profile');
let inputName = form.querySelector('.form__input_type_name');
let inputJob = form.querySelector('.form__input_type_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    document.querySelector('.profile__name').textContent = inputName.value;
    document.querySelector('.profile__job').textContent = inputJob.value;
    popup.classList.remove('popup_opened');
}
form.addEventListener('submit', formSubmitHandler); 




