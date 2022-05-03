const cardElement = document.querySelector('#place').content.querySelector('.photo-grid__item');
const cardList = document.querySelector('.photo-grid');
const profileEditButton = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInfName = document.querySelector('#profile__name');
const popupInfJob = document.querySelector('#profile__job');
const popupOpenProfile = document.querySelector('#popup__profile');
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
    popupOpen(popupImage);
    popupPic.src = imgLink.src;
    popupPic.setAttribute('alt', titleCard.textContent);
    popupImageCap.textContent = titleCard.textContent;
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
      popupClose(popupOpenProfile);
};
const AddPhotoCard = (evt) => {
      evt.preventDefault();
      renderCard( {
        name: popupPhotoAddName.value, 
        link: popupPhotoAddLink.value 
      } );
      popupClose(popupPhotoAdd);
      popupPhotoAddName.value = '';
      popupPhotoAddLink.value = '';
  };
const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
};


profileAddButton.addEventListener('click', function(){
  popupOpen(popupPhotoAdd);
});
profileEditButton.addEventListener('click', function(){
  popupInfName.value = profileName.textContent;
  popupInfJob.value = profileJob.textContent;
  popupOpen(popupOpenProfile);
});

const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
};

popupAddPhotoCloseButton.addEventListener('click', function() {
  popupClose(popupPhotoAdd);
} );
popupImageClose.addEventListener('click', function() {
  popupClose(popupImage);
});
popupCloseBut.addEventListener('click', function() {
  popupClose(popupOpenProfile);
});
formInfPhoto.addEventListener('submit', AddPhotoCard);
formInfProfile.addEventListener('submit', saveProfile);














