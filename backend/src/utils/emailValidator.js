class EmailValidator {
    /**
     * Valida um endereço de e-mail usando uma expressão regular simples.
     * @param {string} email O endereço de e-mail a ser validado.
     * @returns {boolean} Retorna true se o e-mail for válido, caso contrário false.
     */
    static isValid(email) {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }
}

module.exports = EmailValidator;
