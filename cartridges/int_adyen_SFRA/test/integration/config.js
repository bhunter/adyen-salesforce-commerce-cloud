const cvcFail = '123';
const cvcSuccess = '737';
const expiryDate = '1020';
const mastercard = '5100290029002909';
const mastercard3D = '5454545454545454';
const holdernameSuccess = 'Mastercard Success';
const holdernameFail = 'Mastercard Fail';
const username = "username";
const password = "password";
const passwordFail = "passwordFail";

module.exports = {

  Storefront: {
    url: 'https://www.yourstorefront.com',
    login: '/on/demandware.store/Sites-RefArch-Site/default/Checkout-Login'
  },

  Guest: {
    guestEmail: 'guest@adyen.com',
    guestFirstName: 'Guest',
    guestLastName: 'Test',
    guestStreet: 'Guest street 1',
    guestHouseNumber: '123',
    guestCity: 'Amsterdam',
    guestPostCode: '12321',
    guestCountryCode: 'NL',
    guestPhoneNumber: '0612345679',
    guestDOB: '1990-10-10'
  },

  cardSuccess: {
    holderName: holdernameSuccess,
    cardNumber: mastercard,
    expiryDate: expiryDate,
    cvc: cvcSuccess
  },

  cardSuccess3D: {
    holderName: holdernameSuccess,
    cardNumber: mastercard3D,
    expiryDate: expiryDate,
    cvc: cvcSuccess
  },

  cardFail: {
    holderName: holdernameFail,
    cardNumber: mastercard,
    expiryDate: expiryDate,
    cvc: cvcFail
  },

  cardFail3D: {
    holderName: holdernameFail,
    cardNumber: mastercard3D,
    expiryDate: expiryDate,
    cvc: cvcFail
  },

  threeds2DetailsSuccess: {
    password: password
  },

  threeds2DetailsFail: {
    password: passwordFail
  },

  userAccount : {
    username: username,
    password: password
  }

}


