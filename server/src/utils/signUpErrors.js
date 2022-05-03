const signUpErrors = (err) => {
  if (err.message.includes("username"))
    return { username: "Username already exists", email: "" };

  if (err.message.includes("email"))
    return { username: "", email: "Email already exists" };

  return { username: "", email: "" };
};

module.exports = signUpErrors;
