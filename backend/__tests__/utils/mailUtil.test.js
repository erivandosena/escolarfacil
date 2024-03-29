// __tests__/utils/emailValidator.test.js
const EmailValidator = require('../../src/utils/emailValidator');

describe('EmailValidator', () => {
    it('should validate email addresses correctly', () => {
        expect(EmailValidator.isValid('test@example.com.br')).toBe(true);
        expect(EmailValidator.isValid('invalid-email')).toBe(false);
        expect(EmailValidator.isValid('test@.com')).toBe(false);
        expect(EmailValidator.isValid('test@example.co.uk')).toBe(true);
        expect(EmailValidator.isValid('')).toBe(false);
    });
});
