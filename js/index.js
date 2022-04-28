const cardEl = document.querySelector('#place').content.querySelector('.photo-grid__item');
const cardList = document.querySelector('.photo-grid');
const prEditBut = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInfName = document.querySelector('#profile__name');
const popupInfJob = document.querySelector('#profile__job');
const popupOpenPr = document.querySelector('#popup__profile');
const popupTitle = document.querySelector('.popup__title');
const popupPhAdd = document.querySelector('#popup__photo');
const prAddBut = document.querySelector('.profile__add');
const popupPhAddTitle = document.querySelector('#photo__title');
const popupPhAddName = document.querySelector('#photo-name');
const popupPhAddLink = document.querySelector('#photo-link');
const popupCloseBut = document.querySelector('#popup__close');
const popupAddPhCloseBut = document.querySelector('#photo__close');
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
const genCard = (cardInf) => {
  const newCard = cardEl.cloneNode(true);
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

const renCard = (cardInf) => {
  cardList.prepend(genCard(cardInf));
};

inCards.forEach((cardInf) => {
  renCard(cardInf);
});

const savePr = (evt) => {
      evt.preventDefault();
      profileName.textContent = popupInfName.value;
      profileJob.textContent = popupInfJob.value;
      popupCl(popupOpenPr);
};
const photoCardAdd = (evt) => {
      evt.preventDefault();
      renCard( {
        name: popupPhAddName.value, 
        link: popupPhAddLink.value 
      } );
      popupCl(popupPhAdd);
      popupPhAddName.value = '';
      popupPhAddLink.value = '';
  };
const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
};
prAddBut.addEventListener('click', function(){
  popupOpen(popupPhAdd);
});
prEditBut.addEventListener('click', function(){
  popupInfName.value = profileName.textContent;
  popupInfJob.value = profileJob.textContent;
  popupOpen(popupOpenPr);
});

const popupCl = (popup) => {
  popup.classList.remove('popup_opened');
};

popupAddPhCloseBut.addEventListener('click', function() {
  popupCl(popupPhAdd);
} );
popupImageClose.addEventListener('click', function() {
  popupCl(popupImage);
});
popupCloseBut.addEventListener('click', function() {
  popupCl(popupOpenPr);
});
formInfPhoto.addEventListener('submit', photoCardAdd);
formInfProfile.addEventListener('submit', savePr);














