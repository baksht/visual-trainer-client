import { getMaxStringLengthMessage, getRequiredFieldMessage } from 'src/shared/utils';

describe('Validation utils', () => {
  test('getRequiredFieldMessage', () => {
    expect(getRequiredFieldMessage()).toBe('Обязательное поле!');
  });

  test('getMaxStringLengthMessage', () => {
    expect(getMaxStringLengthMessage(100)).toBe('Максимальная длина 100 символов!');
  });
});
