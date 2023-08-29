import { getKeyByValue } from '.';

describe('getKeyByValue (Utility Function)', () => {
  const catObject = {
    id: 2,
    name: 'Alice',
    age: 2,
    color: 'black',
  };

  test('It should return undefined if the value is not found in the object', () => {
    const foundKey = getKeyByValue(catObject, 'Felix');

    expect(foundKey).toBeUndefined();
  });
  test('It should return the key in the object by its value', () => {
    const foundKey = getKeyByValue(catObject, 'black');

    expect(foundKey).toBe('color');
  });
  test('It should return the first key in the object if multiple values are the same', () => {
    const foundKey = getKeyByValue(catObject, 2);

    expect(foundKey).toBe('id');
  });
});
