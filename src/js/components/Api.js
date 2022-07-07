class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _parseResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      }).then((res) => this._parseResponse(res));
    }
  
    redUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.profileName,
          about: data.profileStatus,
        }),
      }).then((res) => this._parseResponse(res));
    }
  
    redAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatarURL,
        }),
      }).then((res) => this._parseResponse(res));
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      }).then((res) => this._parseResponse(res));
    }
  
    addCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.photoName,
          link: data.photoLink,
        }),
      }).then((res) => this._parseResponse(res));
    }
  
    setLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      }).then((res) => this._parseResponse(res));
    }
  
    removeLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => this._parseResponse(res));
    }
  
    removeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => this._parseResponse(res));
    }
  }
  
  export default Api;