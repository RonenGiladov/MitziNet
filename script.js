/* Ronen Giladov 209506757 && Shoham Avrham 318232469 Assignment 1 */

// Get DOM elements
pass = document.getElementById("password");
newPass = document.getElementById("newPassword");
email = document.getElementById("email");
errorContainerSmall = document.getElementById("errorContainerSmall");
errorContainerNotMatching = document.getElementById("errorContainerNotMatching");

// Function to handle button click
function button_clicked() {
    /* Reset border and errors*/
    pass.style.border = "2px groove #D7FBEF";   
    newPass.style.border = "2px groove #D7FBEF";   
    email.style.border = "2px groove #D7FBEF";   
    errorContainerSmall.innerHTML = "";
    errorContainerNotMatching.innerHTML = "";
    
    // Array to store empty input fields
    let emptyInput = [];
    // Check for empty input fields
    if(email.value === "") {
        emptyInput.push(email); 
    }
    if (pass.value === "") {
        emptyInput.push(pass);
    }
    if (newPass.value === "") {
        emptyInput.push(newPass);
    }
    
    // Highlight empty input fields
    empty_input(emptyInput);
    
    // Check for password length
    if (pass.value.length < 8) {
        small_password();
    }

    // Check if passwords match
    if (pass.value != newPass.value) {
        incorrect_pass();
    }
}

// Function to highlight empty input fields
function empty_input(array){
    if (array.length === 0) {
        return;
    }
    for (let i = 0; i < array.length; i++) {
        array[i].style.border = "3px dashed red";   
    }
}

// Function to display error for small password
function small_password(){
    errorContainerSmall.innerHTML = "<h4>Please enter at least 8 characters.</h4>"; 
    pass.style.border = "3px dashed red";   
    newPass.style.border = "3px dashed red";  
}

// Function to display error for passwords not matching
function incorrect_pass(){
   errorContainerNotMatching.innerHTML = "<h4>Please enter matching passwords.</h4>"
   pass.style.border = "3px dashed red"; 
   newPass.style.border = "3px dashed red"; 
}
