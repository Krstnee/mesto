class FormValidator {
    constructor(val, curentForm) {
      this._formSelector = val.formSelector;
      this._inputSelector = val.inputSelector;
      this._submitButtonSelector = val.submitButtonSelector;
      this._inactiveButtonClass = val.inactiveButtonClass;
      this._inputErrorClass = val.inputErrorClass;
      this._errorClass = val.errorClass;
      this._curentForm = curentForm;
      this._buttonElement = this._curentForm.querySelector(
        this._submitButtonSelector
      );
      this._inputList = Array.from(
        this._curentForm.querySelectorAll(this._inputSelector)
      );
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._curentForm.querySelector(
        `#${inputElement.id}_error_text`
      );
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._curentForm.querySelector(
        `#${inputElement.id}_error_text`
      );
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  
    toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
      }
    }
  
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }
  
    _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _setEventListeners() {
      this.toggleButtonState();
  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          this.toggleButtonState(this._inputList);
        });
      });
    }
  
    resetValidation() {
      this.toggleButtonState();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
  
    enableValidation() {
      this._setEventListeners();
    }
  }
  
  export default FormValidator;