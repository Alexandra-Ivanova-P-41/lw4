function isFilled(element) {
  if (element.length <= 0) {
    return false;
  }
  return true;
}

function isNumber(element) {
  if (element.match(/[0-9]+/) !== null) {
    return true;
  }
  return false;
}

function isEmail(email) {
  if (email.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/) !== null) {
    return true;
  }
  return false;
}

function fieldValidationName(element) {
  const parent = element.parentElement;

  let errorString = '';
  if (!isFilled(element.value)) {
    errorString = 'Expected input name';
  }
  if (isNumber(element.value)) {
    errorString = 'Name must not contain numbers';
  }
  if (errorString.length > 0) {
    element.classList.add('invalid-input');
    parent.children[1].innerHTML = errorString;
  } else {
    element.classList.remove('invalid-input');
    parent.children[1].innerHTML = '';
  }
}

function passwordValidation(password) {
  const parent = password.parentElement;
  let errorString = '';
  if (!isFilled(password.value)) {
    errorString = 'Expected input password';
  } else if (password.value.length < 6) {
    errorString = 'Password must be more than 6 characters';
  }
  if (errorString.length > 0) {
    password.classList.add('invalid-input');
    parent.children[1].innerHTML = errorString;
  } else {
    password.classList.remove('invalid-input');
    parent.children[1].innerHTML = '';
  }
}

function emailValidation(email) {
  const parent = email.parentElement;
  let errorString = '';
  if (!isFilled(email.value)) {
    errorString = 'Expected input email';
  } else if (!isEmail(email.value)) {
    errorString = 'Incorrect mail format';
  }
  if (errorString.length > 0) {
    email.classList.add('invalid-input');
    parent.children[1].innerHTML = errorString;
  } else {
    email.classList.remove('invalid-input');
    parent.children[1].innerHTML = '';
  }
}

const registrationButton = document.querySelector('.form-registration-item__button');

registrationButton.onclick = function () {
  const firstName = document.querySelector('#first-name');
  fieldValidationName(firstName);

  const lastName = document.querySelector('#last-name');
  fieldValidationName(lastName);

  const email = document.querySelector('#email');
  emailValidation(email);

  const password = document.querySelector('#password');
  passwordValidation(password);
};
