// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

function checkUserName() {
    var username = document.getElementById('usertext').value;
    var spclCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var length = username.length;
    if (length <= 0 || length < 8 || length > 15 || username.indexOf(' ') >= 0 || spclCharacters.test(username)) {
        document.getElementById('name_error').innerHTML += <p>"Check your username again</p>;
        return false;
    }
    return true;

}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
    var email = document.getElementById('emailtext').value;
    var alphaNumeric = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (alphaNumeric.test(email))
    return true;
    return false;
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    var password = document.getElementById('passwordtext').value;
    var check = /^[0-9a-zA-Z]+$/;
    if (check.test(password)) {
        return true;
    }
    return false;
}