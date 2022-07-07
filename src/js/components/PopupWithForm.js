import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formPopup = this._popup.querySelector('.popup__form');
    this._formData = this._formPopup.querySelectorAll('.popup__input');
    this._btnSubmit = this._formPopup.querySelector('.popup__submit');
    this._text = this._btnSubmit.textContent;
  }

  _getInputValues() {
    this._formDataValues = {};
    this._formData.forEach(input => {
      this._formDataValues[input.name] = input.value;
    })

    return this._formDataValues;
  }

  loading(isLoading) {
    if (isLoading) {
      this._btnSubmit.value = 'Сохранение...'
    } else {
      this._btnSubmit.value = 'Сохранить';
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
  super.close();
  this._formPopup.reset();
  }
}

export default PopupWithForm;