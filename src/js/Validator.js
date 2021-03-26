export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const regex1 = /^[^-_\d][\d\w-_]+[^\d-_]$/ig;
    const regex2 = /\d{4,}/ig;
    if (regex1.test(this.userName) === true && regex2.test(this.userName) === false) {
      return 'Имя пользователя полностью валидно!';
    }
    throw new Error('Некорректное имя пользователя!');
  }
}
