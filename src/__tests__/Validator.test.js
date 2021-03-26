import Validator from '../js/Validator';

it('Метод validateUsername() должен правильно валлидировать корректное имя пользователя', () => {
  const valid = new Validator('barny420xxx');
  const receive = valid.validateUsername();
  expect(receive).toBe('Имя пользователя полностью валидно!');
});

it('Метод validateUsername() не должен валлидировать имя пользователя с цифрами, тире или нижними подчеркиваниями в начале userName', () => {
  const error = 'Некорректное имя пользователя!';
  expect(() => new Validator('7barny420xxx').validateUsername()).toThrowError(error);
  expect(() => new Validator('-barny420xxx').validateUsername()).toThrowError(error);
  expect(() => new Validator('_barny420xxx').validateUsername()).toThrowError(error);
});

it('Метод validateUsername() не должен валлидировать имя пользователя с цифрами, тире или нижними подчеркиваниями в конце userName', () => {
  const error = 'Некорректное имя пользователя!';
  expect(() => new Validator('barny420xxx777').validateUsername()).toThrowError(error);
  expect(() => new Validator('barny420xxx--').validateUsername()).toThrowError(error);
  expect(() => new Validator('barny420xxx__').validateUsername()).toThrowError(error);
});

it('Метод validateUsername() не должен валлидировать имя пользователя если в userName имеется более трех цифр подряд', () => {
  const error = 'Некорректное имя пользователя!';
  expect(() => new Validator('barny4202xxx').validateUsername()).toThrowError(error);
});
