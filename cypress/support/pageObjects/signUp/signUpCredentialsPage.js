class SignUpCredentialsPage {

    static get emailInput() { return '[data-testid="registration-email"]'; }

    static get submitButton() { return '[data-testid="submit-button"]'; }

    static get passwordInput() { return '[data-testid="registration-password"]'; }

    static get termsCheckbox() { return '[data-testid="registration-terms"]'; }

    static get createAccountButton() { return '[data-testid="email-sign-up"]'; }

    static get accountAlreadyExistsLink() { return '[data-testid="registration-email-subtext-container"] [data-testid="login-to-continue-link"]'; }

    static get emailErrorMessage() { return '[data-testid="registration-email-subtext-container"] [data-testid="form-input-wrapper-error-text"]'; }

    static passwordValidationIcon(feedbackOptionId) { return `[data-testid="ds-${feedbackOptionId}-feedback"] div`; }

    static get passwordLengthValidationMessage() { return this.passwordValidationIcon("minimum-length"); }
    static get passwordNumericValidationMessage() { return this.passwordValidationIcon("numeric"); }
    static get passwordSymbolValidationMessage() { return this.passwordValidationIcon("symbol"); }
    static get passwordLetterCasingValidationMessage() { return this.passwordValidationIcon("letter-casing"); }
    static baseValidationIconId(feedbackOptionId) { return `ds-${feedbackOptionId}-feedback-icon`; }
    static get validatedIconId() { return this.baseValidationIconId("validated"); }
    static get errorIconId() { return this.baseValidationIconId("error"); }
}

export default SignUpCredentialsPage;