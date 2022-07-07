class UserInfo {
    constructor({ username, status, avatar }) {
      this._username = document.querySelector(username);
      this._status = document.querySelector(status);
      this._avatar = document.querySelector(avatar);
    }
  
    getUserInfo() {
      const userInfo = {
        username: this._username.textContent,
        status: this._status.textContent,
        avatar: this._avatar.src,
      };
  
      return userInfo;
    }
  
    setUserInfo(data) {
      this._username.textContent = data.name;
      this._status.textContent = data.about;
      this._avatar.src = data.avatar;
    }
  }
  
  export default UserInfo;
  