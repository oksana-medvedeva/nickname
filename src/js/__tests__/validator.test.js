import Validator from '../validator';

test('should be valid', () => {
  const result = Validator.validateUsername('Boonies-12_Stranger');

  expect(result).toEqual(true);
});

test('should fail when the first symbol is a digit', () => {
  const result = Validator.validateUsername('12_Stranger');

  expect(result).toEqual(false);
});

test('should fail when the first symbol is "-"', () => {
  const result = Validator.validateUsername('-12_Stranger');

  expect(result).toEqual(false);
});

test('should fail when the first symbol is "_"', () => {
  const result = Validator.validateUsername('_12_Stranger');

  expect(result).toEqual(false);
});

test('should fail when the last symbol is a digit', () => {
  const result = Validator.validateUsername('Fill-12');

  expect(result).toEqual(false);
});

test('should fail when the last symbol is "-"', () => {
  const result = Validator.validateUsername('Fill-');

  expect(result).toEqual(false);
});

test('should fail when the last symbol is "_"', () => {
  const result = Validator.validateUsername('Stranger_');

  expect(result).toEqual(false);
});

test('should fail when there are > 3 digits in a row', () => {
  const result = Validator.validateUsername('Stranger1234Blink');

  expect(result).toEqual(false);
});
