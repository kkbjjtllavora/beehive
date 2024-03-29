export const checkValidity = (value, rules) => {
  let isValid = true;

  if(rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if(rules.maxlength) {
    isValid = value.length <= rules.maxlength && isValid;
  }

  if(rules.minlength) {
    isValid = value.length >= rules.minlength && isValid;
  }

  return isValid;
}