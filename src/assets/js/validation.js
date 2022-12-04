export function validPhone(value) {
  return /^\+\d{9,12}\d$/.test(value) ? true : false;
}

export function validPassword(value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(value)
    ? true
    : false;
}
