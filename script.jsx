const submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!matchingPasswords()) {
        alert("Passwords do not match.");
    }
    alert("You've successfully created an account. Please refresh.")
});

// hello motoo

const matchingPasswords = () => {
    let firstPassword = document.getElementById("password").value;
    let secondPassword = document.getElementById("confirm_password").value;
    let condition = (firstPassword === secondPassword);
    // if (condition) {
    //     console.log("MATCHING")
    // }
    // else {
    //     console.log("NOT MATCHING");
    // }
    return firstPassword === secondPassword;
}

// const notMatchingPasswords = () => {
//     let createError = document.getElement
// }