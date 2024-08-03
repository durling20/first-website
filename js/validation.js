let phoneRegex = /^(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
let emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;
let zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;

const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let form = null;
let successMsg = null;

function initValidation(formId, successId) {
  form = document.getElementById(formId);
  successMsg = document.getElementById(successId);

  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    input.addEventListener("change", inputChanged);
  }
  form.addEventListener("submit", submitForm);
}

function inputChanged(ev) {
  let el = ev.currentTarget;
  validateForm();
  el.classList.add('was-validated');
}

function submitForm(ev) {
  console.log("in submit");
  let form = ev.currentTarget;
  ev.preventDefault(); 
  ev.stopPropagation();

  validateForm();

  if (!form.checkValidity()) {
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
      input.classList.add('was-validated');
    }
  } else {
    form.style.display = "none";
    successMsg.style.display = "block";
  }
}

function validateForm() {
  checkRequired("first-name", "First Name is Required");
  checkRequired("last-name", "Last Name is Required");
  checkRequired("address", "Address is Required");
  checkRequired("city", "City is Required");
  
  if (checkRequired("state", "State is Required")) {
    validateState("state", "Not a valid State, enter two digit code e.g., UT");
  }
 
  if (checkRequired("email", "Email Address is required")) {
    checkFormat("email", "email format is bad", emailRegex);
  }
  if (checkRequired("zip", "Zip Code is Required")) {
    checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex);
  }
  if (checkRequired("phone", "Phone is required")) {
    checkFormat("phone", "phone format is bad", phoneRegex);
  }
  checkRequired("newspaper", "You must select at least one!");
}

function validateState(id, msg) {
  let el = document.getElementById(id);
  let valid = false;
  let value = el.value.toUpperCase();
  valid = stateAbbreviations.includes(value);
 
  setElementValidity(id, valid, msg);
}

function checkFormat(id, msg, regex) {
  let el = document.getElementById(id);
  let value = el.value;
  let valid = regex.test(value);

  setElementValidity(id, valid, msg);
  return valid;
}

function checkRequired(id, message) {
  let el = document.getElementById(id);
  let valid = false;
  let type = el.type;
  
  if (type === 'text' || type === 'password') {
    valid = el.value.trim() !== '';
  } else if (type === 'checkbox' || type === 'radio') {
    let name = el.name;
    let elements = document.querySelectorAll(`input[name='${name}']`);
    elements.forEach(element => {
      if (element.checked) {
        valid = true;
      }
    });
  }

  setElementValidity(id, valid, message);
  return valid;
}

function setElementValidity(id, valid, message) {
  let el = document.getElementById(id);
  let errorDiv = el.parentElement.querySelector(".errorMsg");

  if (valid) {
    el.setCustomValidity('');
    if (errorDiv) {
      errorDiv.textContent = '';
    }
  } else {
    el.setCustomValidity(message);
    if (errorDiv) {
      errorDiv.textContent = message;
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initValidation("myform", "success");
});
