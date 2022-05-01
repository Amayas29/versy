loginErrors = (err) =>{
    const errors = {email: "",password: ""};

    if(err.message.includes("password")){
        errors.password = "Password incorrect";
    }
   
    if(err.message.includes("email")){
        errors.email = "Email not correspoding to any user";
    }
    
    return errors;
}

module.exports = loginErrors;