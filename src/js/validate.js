export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    if (this.username === undefined) {
      throw new Error('Имя введено некорректно');
    }
    const beginEndValidate = /^[a-zA-Z][\w-]*[a-zA-Z]$/.test(this.username);
    const threeDigits = !/\d{4}/.test(this.username);
    const validUsername = beginEndValidate && threeDigits;
    return validUsername;
  }
}
