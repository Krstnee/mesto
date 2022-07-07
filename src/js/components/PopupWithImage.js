import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector('.popup__picture');
    this._popupImageCaption = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    super.open();
    this._popupPicture.src = link;
    this._popupImageCaption.textContent = name;
    this._popupPicture.alt = name;
  }
}

export default PopupWithImage;