import '../css/style.css';

function fieldValidationFirstName(element) {
  let parent = element.parentElement;

  let errorString = '';
  if (!isFilled(element.value)) {
    errorString = 'Expected input name';
  }
  if (isNumber(element.value)) {
    errorString = 'Name must not contain numbers';
  }
  if (errorString.length > 0) {
    element.style['boxShadow'] = 'inset 0 -1px 0 red';
    parent.lastChild.innerHTML = errorString;
  } else {
    element.style['boxShadow'] = 'inset 0 -1px 0 rgba(199, 199, 199, 0.3)';
    parent.lastChild.innerHTML = '';
  }
}
function passwordValidation(password) {
  let parent = password.parentElement;
  let errorString = '';
  if (!isFilled(password.value)) {
    errorString = 'Expected input password';
  } else if (password.value.length < 6) {
    errorString = 'Password must be more than 6 characters';
  }
  if (errorString.length > 0) {
    password.style['boxShadow'] = 'inset 0 -1px 0 red';
    parent.lastChild.innerHTML = errorString;
  } else {
    password.style['boxShadow'] = 'inset 0 -1px 0 rgba(199, 199, 199, 0.3)';
    parent.lastChild.innerHTML = '';
  }
}
function emailValidation(email) {
  let parent = email.parentElement;
  let errorString = '';
  if (!isFilled(email.value)) {
    errorString = 'Expected input email';
  } else if (!isEmail(email.value)) {
    errorString = 'Incorrect mail format';
  }
  if (errorString.length > 0) {
    email.style['boxShadow'] = 'inset 0 -1px 0 red';
    parent.lastChild.innerHTML = errorString;
  } else {
    email.style['boxShadow'] = 'inset 0 -1px 0 rgba(199, 199, 199, 0.3)';
    parent.lastChild.innerHTML = '';
  }
}
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
  console.log(email);
  if (email.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/) !== null) {
    return true;
  }
  return false;
}

var registrationButton = document.querySelector('.form-registration__button');

registrationButton.onclick = function () {
  let firstName = document.querySelector('#name-first');
  let lastName = document.querySelector('#name-second');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  fieldValidationFirstName(firstName);
  fieldValidationLastName(lastName);
  emailValidation(email);
  passwordValidation(password);
};