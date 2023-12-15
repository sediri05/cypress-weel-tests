import SignUpCredentialsPage from "./pageObjects/signUp/signUpCredentialsPage";
import { verifyPasswordValidationIcon } from "./helperFunctions/getPasswordVerificationObjects";

Cypress.Commands.add('clickFirstPageSubmitButton', () => {
    cy.get(SignUpCredentialsPage.submitButton).click();
});

Cypress.Commands.add('createAccount', () => {
    cy.get(SignUpCredentialsPage.createAccountButton).should('be.enabled');
    cy.get(SignUpCredentialsPage.createAccountButton).click();
});

Cypress.Commands.add('navigateToSignUpPage', () => {
    cy.visit("https://app-moccona.letsweel.com/app/business-signup");
    cy.get(SignUpCredentialsPage.submitButton).should('be.visible', {timeout: 10000});
});

Cypress.Commands.add('fillSignUpForm', (email, password) => {
    cy.get(SignUpCredentialsPage.emailInput).type(email);
    cy.clickFirstPageSubmitButton();
    cy.get(SignUpCredentialsPage.passwordInput).type(password);
    cy.get(SignUpCredentialsPage.termsCheckbox).click();
})

Cypress.Commands.add('verifyPasswordValidationIcons', (expectations) => {
    Object.entries(expectations).forEach(([key, value]) => {
        verifyPasswordValidationIcon(key, value);
      });
})

Cypress.Commands.add('clearEmailAndPasswordFields', () => {
    cy.get(SignUpCredentialsPage.emailInput).clear();
    cy.get(SignUpCredentialsPage.passwordInput).clear();
})

Cypress.Commands.add('verifyCreateAccountButtonIsDisabled', () => {
    cy.get(SignUpCredentialsPage.createAccountButton).should('be.disabled');
})

Cypress.Commands.add('verifyEmailErrorMessageIsVisible', () => {
    cy.get(SignUpCredentialsPage.emailErrorMessage).should('be.visible');
})

Cypress.Commands.add('verifyAllPasswordErrorMessagesAreVisible', () => {
    verifyPasswordValidationIcon("length", "t");
    verifyPasswordValidationIcon("numeric", "t");
    verifyPasswordValidationIcon("symbol", "t");
    verifyPasswordValidationIcon("casing", "t");
})

Cypress.Commands.add('verifyAccountAlreadyExistsMessageIsVisible', () => {
    cy.get(SignUpCredentialsPage.accountAlreadyExistsLink).should('be.visible');
});

Cypress.Commands.add('createUserViaRegistrationApiUsing', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'https://develop.api.divipay.com/api/registration/',
        headers: {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/json;charset=UTF-8',
          'origin': 'https://app-moccona.letsweel.com',
          'referer': 'https://app-moccona.letsweel.com/',
        },
        body: {
          "confirm_password": password,
          "email": email,
          "password": password
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
})