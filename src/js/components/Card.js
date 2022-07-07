class Card {
    constructor({
      data,
      cardSelector,
      userId,
      handleCardClick,
      handleDeleteIconClick,
      handleSetLike,
      handleRemoveLike,
    }) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._userId = userId;
      this._cardId = data._id;
      this._cardOwnerId = data.owner._id;
      this._handleCardClick = handleCardClick;
      this._handleDeleteIconClick = handleDeleteIconClick;
      this._likes = data.likes;
      this._handleSetLike = handleSetLike;
      this._handleRemoveLike = handleRemoveLike;
      this._element = this._getTemplate();
      this._elementName = this._element.querySelector('.element__name');
      this._elementImage = this._element.querySelector('.element__image');
      this._elementLike = this._element.querySelector('.element__like');
      this._elementThrash = this._element.querySelector('.element__thrash');
      this._likesCounter = this._element.querySelector('.element__like-counter');
    }
  
    _getTemplate() {
      this._card = document
        .querySelector(this._cardSelector)
        .content.querySelector('.element')
        .cloneNode(true);
  
      return this._card;
    }
  
    removeElement() {
      this._element.remove();
      this._element = null;
    }
  
    _hasBtnThrash() {
      if (this._userId !== this._cardOwnerId) {
        this._elementThrash.remove();
      }
    }
  
    _isCardLiked() {
      if (
        this._likes.some((user) => {
          return this._userId === user._id;
        })
      ) {
        this._elementLike.classList.add('element__like_liked');
      }
    }
  
    handleLikeCard(data) {
      this._likes = data.likes;
      this._likesCounter.textContent = this._likes.length;
      this._elementLike.classList.toggle('element__like_liked');
    }
  
    _setEventListeners() {
      this._elementThrash.addEventListener('click', () => {
        this._handleDeleteIconClick(this._cardId);
      });
  
      this._elementLike.addEventListener('click', () => {
        if (this._elementLike.classList.contains('element__like_liked')) {
          this._handleRemoveLike(this._cardId);
        } else {
          this._handleSetLike(this._cardId);
        }
      });
  
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }
  
    generateCard() {
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._elementName.textContent = this._name;
      this._hasBtnThrash();
      this._isCardLiked();
      this._likesCounter.textContent = this._likes.length;
      this._setEventListeners();
  
      return this._element;
    }
  }
  
  export default Card;