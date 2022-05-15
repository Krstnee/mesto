const cardElement = document.querySelector('#place').content.querySelector('.photo-grid__item');
const cardList = document.querySelector('.photo-grid');
const profileEditButton = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInfName = document.querySelector('#profile-name');
const popupInfJob = document.querySelector('#profile-job');
const openPopupProfile = document.querySelector('#popup__profile');
const popupTitle = document.querySelector('.popup__title');
const popupPhotoAdd = document.querySelector('#popup__photo');
const profileAddButton = document.querySelector('.profile__add');
const popupPhotoAddTitle = document.querySelector('#photo__title');
const popupPhotoAddName = document.querySelector('#photo-name');
const popupPhotoAddLink = document.querySelector('#photo-link');
const popupCloseBut = document.querySelector('#popup__close');
const popupAddPhotoCloseButton = document.querySelector('#photo__close');
const formInfProfile = document.querySelector('#profile-form');
const formInfPhoto = document.querySelector('#photo-form');
const popupImage = document.querySelector('#popup-image');
const popupPic = document.querySelector('.popup__picture');
const popupImageCap = document.querySelector('.popup__caption');
const popupImageClose = document.querySelector('.popup__image-close');

const popups = document.querySelectorAll('.popup');
const cardForm = document.forms.photoAdd;
let closeByEscape;

const handleDeleteCard = (evt) => {
  evt.target.closest('.photo-grid__item').remove();
};
const handleLikeCard = (evt) => {
  evt.target.classList.toggle('photo-grid__like_act');
};
const generateCard = (cardInf) => {
  const newCard = cardElement.cloneNode(true);
  const titleCard = newCard.querySelector('.photo-grid__name');
  titleCard.textContent = cardInf.name;

  const imgLink = newCard.querySelector('.photo-grid__pic');
  imgLink.src = cardInf.link;
  imgLink.addEventListener('click', function () {
    popupPic.src = imgLink.src;
    popupPic.setAttribute('alt', titleCard.textContent);
    popupImageCap.textContent = titleCard.textContent;
    openPopup(popupImage);
  });
  imgLink.setAttribute('alt', cardInf.name);

  const delCard = newCard.querySelector('.photo-grid__thrash');
  delCard.addEventListener('click', handleDeleteCard);
  const likeCard = newCard.querySelector('.photo-grid__like');
  likeCard.addEventListener('click', handleLikeCard);
  return newCard;
};

const renderCard = (cardInf) => {
  cardList.prepend(generateCard(cardInf));
};

inCards.forEach((cardInf) => {
  renderCard(cardInf);
});

const saveProfile = (evt) => {
      evt.preventDefault();
      profileName.textContent = popupInfName.value;
      profileJob.textContent = popupInfJob.value;
      closePopup(openPopupProfile);
      const btnProfileSubmit = document.querySelector('#popup__submit');
      btnProfileSubmit.classList.add('popup__submit_inactive');
  btnProfileSubmit.setAttribute('disabled', true);
  cardForm.reset();
};
const AddPhotoCard = (evt) => {
      evt.preventDefault();
      renderCard( {
        name: popupPhotoAddName.value, 
        link: popupPhotoAddLink.value 
      } );
      closePopup(popupPhotoAdd);
      const btnPopupSubmit = document.querySelector('#photo__submit');
  btnPopupSubmit.classList.add('popup__submit_inactive');
  btnPopupSubmit.setAttribute('disabled', true);
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


profileAddButton.addEventListener('click', function(){
  openPopup(popupPhotoAdd);
});


profileEditButton.addEventListener('click', function(){
  popupInfName.value = profileName.textContent;
  popupInfJob.value = profileJob.textContent;
  openPopup(openPopupProfile);
});

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};



formInfPhoto.addEventListener('submit', AddPhotoCard)
formInfProfile.addEventListener('submit',saveProfile)


popupAddPhotoCloseButton.addEventListener('click', function() { 

  closePopup(popupPhotoAdd); 

} ); 

popupImageClose.addEventListener('click', function() { 

  closePopup(popupImage); 

}); 

popupCloseBut.addEventListener('click', function() { 

  closePopup(openPopupProfile); 

}); 

formInfPhoto.addEventListener('submit', AddPhotoCard); 

formInfProfile.addEventListener('submit', saveProfile); 

 

openPopupProfile.addEventListener('click', function (evt) { 

  closePopup(evt.target); 

}); 

 

popupPhotoAdd.addEventListener('click', function (evt) { 

  closePopup(evt.target); 

}); 

 

popupImage.addEventListener('click', function (evt) { 

  closePopup(evt.target); 

}); 

 










