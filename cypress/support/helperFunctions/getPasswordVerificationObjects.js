import SignUpCredentialsPage from '../pageObjects/signUp/signUpCredentialsPage';
/*
This function is used to verify the password validation icons on the sign up page.
It takes in two parameters:
1. expectationKey - this is the key of the expectation object
2. expectationValue - this is the value of the expectation object

The function then uses a switch statement to determine which element to use for 
the expectationKey.

The point of this is to enable the test to retrieve the correct element to verify
and what the data-testid attribute should be for that element. This allows for looping
through the expectations object and verifying each expectation.
*/
export function verifyPasswordValidationIcon(expectationKey, expectationValue) {
    let element;
  
    switch (true) {
      case expectationKey.toLowerCase().includes('length'):
        element = SignUpCredentialsPage.passwordLengthValidationMessage;
        break;
      case expectationKey.toLowerCase().includes('numeric'):
        element = SignUpCredentialsPage.passwordNumericValidationMessage;
        break;
      case expectationKey.toLowerCase().includes('symbol'):
        element = SignUpCredentialsPage.passwordSymbolValidationMessage;
        break;
      case expectationKey.toLowerCase().includes('casing'):
        element = SignUpCredentialsPage.passwordLetterCasingValidationMessage;
        break;
      default:
        throw new Error(`Unexpected key: ${expectationKey}`);
    }
  
    const Test_ID = expectationValue === 't' ? SignUpCredentialsPage.errorIconId : SignUpCredentialsPage.validatedIconId;
    return cy.get(element).should('have.attr', 'data-testid', Test_ID);
  }
  