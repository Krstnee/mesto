export const btnProfileEdit = document.querySelector('.profile__edit');
export const btnAddPhoto = document.querySelector('.profile__add');
export const btnAvatarEdit = document.querySelector('.profile__avatar-btn');
export const photoForm = document.forms.photoAdd;
export const profileForm = document.forms.profileEdit;
export const avatarForm = document.forms.avatarForm;
export const avatarPicture = document.querySelector('.profile__avatar');
export const nameInput = profileForm.querySelector('#profile-name');
export const statusInput = profileForm.querySelector('#profile-status');

export const valSettings = {
 formSelector: '.popup__form',
 inputSelector: '.popup__input',
 submitButtonSelector: '.popup__submit',
 inactiveButtonClass: 'popup__submit_inactive',
 inputErrorClass: 'popup__input_error',
 errorClass: 'popup__input_error-text-active',
};