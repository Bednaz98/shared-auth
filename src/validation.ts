import { UserCreationResults, UserCreationErrors, PasswordConfig, UsernameConfig } from "./types";


export function validateEmail(email: string): UserCreationResults {
    const validator = require("email-validator");
    const result: boolean = validator.validate(email)
    return {
        isValid: result,
        errorMessage: [UserCreationErrors.emailNotValid]
    }
}


export function usernameValidator(username: string, usernameConfig?: UsernameConfig): UserCreationResults {
    const defaultConfig: UsernameConfig = {
        maxLength: 256,
        minLength: 6
    }
    const config = { ...defaultConfig, ...usernameConfig }
    if (username.length < config.minLength) return {
        isValid: false,
        errorMessage: [UserCreationErrors.usernameShort]
    }
    else if (username.length > config.maxLength) return {
        isValid: false,
        errorMessage: [UserCreationErrors.usernameLong]
    }
    return {
        isValid: true,
        errorMessage: []
    }
}


export function passWordCheck(rawPassword: string, config?: PasswordConfig): UserCreationResults {
    const owasp = require('owasp-password-strength-test');
    const defaultConfig = {
        allowPassphrases: true,
        maxLength: 256,
        minLength: 10,
        minPhraseLength: 20,
        minOptionalTestsToPass: 4,
    }
    owasp.config({ ...defaultConfig, ...config });
    const result = owasp.test(rawPassword);
    return {
        isValid: result.strong as boolean,
        errorMessage: result.errors as string[]
    };
}

export function validateNumber(number: string) {
    const validateNANumber = require("validate-na-number");
    return validateNANumber(number)
}