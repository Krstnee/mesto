import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


const cardList = document.querySelector('.photo-grid');
const profileEditButton = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInfName = document.querySelector('#profile-name');
const popupInfJob = document.querySelector('#profile-job');
const openPopupProfile = document.querySelector('#popup__profile');

const popupPhotoAdd = document.querySelector('#popup__photo');
const profileAddButton = document.querySelector('.profile__add');

const popupPhotoAddName = document.querySelector('#photo-name');
const popupPhotoAddLink = document.querySelector('#photo-link');

const formInfProfile = document.querySelector('#profile-form');
const formInfPhoto = document.querySelector('#photo-form');

const popupImageClose = document.querySelector('.popup__image-close');

const popups = document.querySelectorAll('.popup');
const cardForm = document.forms.photoAdd;
let closeByEscape;
let cardElement

const valSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input_error-text-active',
};

const addForm = document.forms.photoAdd;
const photoFormValidator = new FormValidator(valSettings, addForm)
photoFormValidator.enableValidation()
const editForm = document.forms.profileEdit;
const profileFormValidator = new FormValidator(valSettings, editForm);
profileFormValidator.enableValidation();

const saveProfile = (evt) => {
      evt.preventDefault();
      profileName.textContent = popupInfName.value;
      profileJob.textContent = popupInfJob.value;
      closePopup(openPopupProfile);
      
};
const addPhotoCard = (evt) => {
      evt.preventDefault();
      const newCardData =  {
        name: popupPhotoAddName.value, 
        link: popupPhotoAddLink.value 
      };
      createCard(newCardData);
      cardList.prepend(cardElement)
      closePopup(popupPhotoAdd);
  cardForm.reset();
};
const openPopup= (popup) => {
  popup.classList.add('popup_opened');
  closeByEscape = (evt) => {
    if (evt.key == 'Escape') {
      closePopup(popup);
    }
  };
  document.addEventListener('keydown', closeByEscape);
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

profileEditButton.addEventListener('click', function(){
  popupInfName.value = profileName.textContent;
  popupInfJob.value = profileJob.textContent;
  openPopup(openPopupProfile);
  
  
});

profileAddButton.addEventListener('click', function(){
  openPopup(popupPhotoAdd);
 
  
});


formInfPhoto.addEventListener('submit', addPhotoCard)
formInfProfile.addEventListener('submit',saveProfile)

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if ((evt.target.classList.contains('popup_opened')) ||  (evt.target.classList.contains('popup__close'))) {
      closePopup(popup);
    }
   
  });
});

const createCard = (item) => {
  const newCard = new Card(item, '#place');
  cardElement = newCard.generateCard();
  return cardElement
}

inCards.forEach((item) => {
  createCard(item);
  cardList.prepend(cardElement)
});

export {openPopup}

