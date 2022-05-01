
signUpErrors = (err) => {
    let errors = { username: "", email: ""}
    
    if( err.message.includes("username")){
        errors.username = "Username already exists";
    }

    if( err.code === 11000){
        errors.email = "Email already exists";
    }
    
    return errors;
}

module.exports = signUpErrors;