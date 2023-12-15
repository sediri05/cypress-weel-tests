import invalidEmailScenarios from "../../fixtures/invalidEmails.json";
import invalidPasswordScenarios from "../../fixtures/invalidPasswordScenarios.json";
import testData from "../../fixtures/testData.json";
const Chance = require('chance');
const chance = new Chance();


beforeEach(() => {
  cy.navigateToSignUpPage();
})


describe('Sign Up Unsuccessfully', () => {
  const RANDOM_EMAIL = chance.email({domain: "example.com"});
  beforeEach(() => {
    cy.createUserViaRegistrationApiUsing(RANDOM_EMAIL, testData.validPassword);
  })

  it('should not sign up an existing user', () => {
    cy.fillSignUpForm(RANDOM_EMAIL, testData.validPassword);
    cy.createAccount();
    cy.verifyAccountAlreadyExistsMessageIsVisible();
  })
})

describe('Sign Up Successfully', () => {
  it('should sign up a new user', () => {
    const RANDOM_EMAIL = chance.email({domain: "example.com"});
    cy.fillSignUpForm(RANDOM_EMAIL, testData.validPassword);
    cy.createAccount();
    cy.url().should('include', '/personal-info');
  })
})

describe('Sign Up Email and Password Field Validation Test', () => {
  it('should show all error messages when no inputs in email and password fields', () => {
    const RANDOM_EMAIL = chance.email({domain: "example.com"});
    cy.fillSignUpForm(RANDOM_EMAIL, testData.validPassword);
    cy.clearEmailAndPasswordFields();
    cy.verifyEmailErrorMessageIsVisible();
    cy.verifyAllPasswordErrorMessagesAreVisible();
    cy.verifyCreateAccountButtonIsDisabled();
  })
})

describe('Sign Up Email Field Validation Tests', () => {
  it ('should show error message for empty email field in first page', () => {
    cy.clickFirstPageSubmitButton();
    cy.verifyEmailErrorMessageIsVisible();
  })

  invalidEmailScenarios.invalidEmails.forEach((email) => {
  it(`should show error messages in second page for invalid email: ${email}`, () => {
      cy.fillSignUpForm(email, "Test123.");
      cy.createAccount();
      cy.verifyEmailErrorMessageIsVisible();
    })
  })
})

describe('Sign Up Password Field Validation Tests', () => {
  invalidPasswordScenarios.data.forEach((scenarioObject) => {
    const SCENARIO_KEY = Object.keys(scenarioObject)[0];
    const SCENARIO = scenarioObject[SCENARIO_KEY];

    it(`should show error messages for invalid password: ${SCENARIO_KEY}`, () => {
      const RANDOM_EMAIL = chance.email({domain: "example.com"});
      cy.fillSignUpForm(RANDOM_EMAIL, SCENARIO.password);
      cy.verifyCreateAccountButtonIsDisabled();
      cy.verifyPasswordValidationIcons(SCENARIO.expectations);
    });
  });
})