import Validator from '../validate';

test('Checking the validator with a valid nickname', () => {
  const received = new Validator('Afanasiy_-123k').validateUsername();
  const expected = true;
  expect(received).toEqual(expected);
});

test('Checking a validator with a forbidden + symbol', () => {
  const received = new Validator('Afanasiy+123k').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Checking with a username containing 4 digits in a row', () => {
  const received = new Validator('Afanasiy1234k').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Validation with an underscore at the beginning', () => {
  const received = new Validator('_Afanasiy').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Validation with an underscore at the end', () => {
  const received = new Validator('Afanasiy_').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Checking with a dash at the beginning', () => {
  const received = new Validator('-Afanasiy').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Checking with a dash at the end', () => {
  const received = new Validator('Afanasiy-').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Check with a number at the beginning', () => {
  const received = new Validator('1Afanasiy').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Check with a number at the end', () => {
  const received = new Validator('Afanasiy1').validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Check with empty username', () => {
  const received = () => new Validator().validateUsername();
  const expected = 'Имя введено некорректно';
  expect(received).toThrow(expected);
});
