import {openPopup} from './index.js';

class Card {
    constructor(data, cardSelector) {
        this._name=data.name;
        this._link=data.link;
        this._cardSelector=cardSelector;
        this._popupImage=document.querySelector('#popup-image');
        this._popupPicture=document.querySelector('.popup__picture');
        this._popupImageCaption = document.querySelector('.popup__caption');

        this._element = this._getTemplate();

        this._elementName = this._element.querySelector('.photo-grid__name');
        this._elementImage = this._element.querySelector('.photo-grid__pic');
        this._elementLike = this._element.querySelector('.photo-grid__like');
        this._elementThrash = this._element.querySelector('.photo-grid__thrash');
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo-grid__item').cloneNode(true)
        return cardElement
    }

    _openPopupImage() {
        openPopup(this._popupImage);
        this._popupPicture.src=this._link
        this._popupPicture.setAttribute('alt', this._name)
        this._popupImageCaption.textContent=this._name
        
    }
    _removeCard(){
        this._element.remove();
        this._element = null;
    }

    _toggleLikeCard(){
        this._elementLike.classList.toggle('photo-grid__like_act')
    }

    _setEvent(){
        this._elementThrash.addEventListener('click', () =>{
            this._removeCard();
        });
        this._elementLike.addEventListener('click', () => {
            this._toggleLikeCard();
        })
        this._elementImage.addEventListener('click', () => {
            this._openPopupImage(this._element); 
        })
    }
    generateCard(){
        this._setEvent();
        this._elementName.textContent = this._name;
        this._elementImage.setAttribute('alt', this._name);
        this._elementImage.src = this._link;
    
        

    
        return this._element;
      }
}

export {Card};