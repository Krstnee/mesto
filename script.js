const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const saveButton = document.querySelector('.form__submit');


function popupOpen() {
    popup.classList.toggle('popup_opened');
    let name = document.querySelector('.profile__name').textContent;
    let job = document.querySelector('.profile__job').textContent;
    popup.querySelector('.form__input_type_name').value = name;
    popup.querySelector('.form__input_type_job').value = job;
}
editButton.addEventListener('click', popupOpen)
closeButton.addEventListener('click', popupOpen)

function popupSave() {
    popup.classList.toggle('popup_opened');
}
saveButton.addEventListener('click', popupSave)

let form = popup.querySelector('.form_type_profile');
let inputName = form.querySelector('.form__input_type_name');
let inputJob = form.querySelector('.form__input_type_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__name').textContent = inputName.value;
    document.querySelector('.profile__job').textContent = inputJob.value;
}
form.addEventListener('submit', formSubmitHandler); 

let like=document.querySelector('.photo-grid__like');
like.addEventListener('click', function(){
   
    like.classList.toggle('photo-grid__like_active')
})


