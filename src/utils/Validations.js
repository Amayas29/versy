const validateEmail = (email) => {
  email = String(email)
    .toLowerCase()
    .trim();

  if (!email) return { status: false, message: "Email is required." };

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) return { status: true, message: "" };

  return { status: false, message: "Email is invalid." };
};

const validatePassword = (password) => {
  password = String(password);

  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?\d)/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /(.{8,})/;

  if (!password) return { status: false, message: "Password is required." };

  if (!minLengthRegExp.test(password))
    return {
      status: false,
      message: "Password must have more than seven characters.",
    };

  if (!uppercaseRegExp.test(password))
    return {
      status: false,
      message: "Password must have at least one upperCase",
    };

  if (!lowercaseRegExp.test(password))
    return {
      status: false,
      message: "Password must have at least one lowerrCase",
    };

  if (!digitsRegExp.test(password))
    return { status: false, message: "Password must have at least one digit" };

  if (!specialCharRegExp.test(password))
    return {
      status: false,
      message: "Password must have at least one special",
    };

  return { status: true, message: "" };
};

const validatePasswordConfirmation = (password, passwordConfirmation) => {
  if (!passwordConfirmation)
    return { status: false, message: "password confirmation is required." };

  if (passwordConfirmation !== password)
    return { status: false, message: "password confirmation is not matched." };
  return { status: true, message: "" };
};

const validateName = (name) => {
  name = String(name);
  if (!name) return { status: false, message: "Name is required." };
  return { status: true, message: "" };
};

const validateUsername = (username) => {
  username = String(username);
  if (!username) return { status: false, message: "Username is required." };
  return { status: true, message: "" };
};

export {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateName,
  validateUsername,
};
