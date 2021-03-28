//phone input user validation
export const isPhoneValidation = (str) => {
  const regexp = /^(01)[0-9]{9}$/;
  const isValid = regexp.test(str);
  return {
    isValid: isValid,
    errMsg: isValid ? '' : 'it should be like 01*********',
  };
};

//password input user validation
export const isValidPassword = (password) => {
  console.log();
  if (password.length < 8)
    return { isValid: false, errMsg: 'not less than 8 character' };
  if (!/\d/.test(password) && !/[0123456789]/.test(password))
    return {
      isValid: false,
      errMsg: 'must conatain numbers ',
    };
  if (!/[a-zA-Z]/.test(password) && !/[\u0621-\u064A]+/.test(password))
    return {
      isValid: false,
      errMsg: 'have at least one character ',
    };

  return { isValid: true, errMsg: '' };
};
