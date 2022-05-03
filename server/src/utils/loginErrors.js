const loginErrors = (err) => {
  if (err.message.includes("password"))
    return { email: "", password: "Incorrect password" };

  if (err.message.includes("email"))
    return { email: "Email not correspoding to any user", password: "" };

  return { email: "", password: "" };
};

module.exports = loginErrors;
