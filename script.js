
    pass = document.getElementById("password");
    newPass = document.getElementById("newPassword");
    email = document.getElementById("email");
    errorContainerSmall = document.getElementById("errorContainerSmall");
    errorContainerNotMatching = document.getElementById("errorContainerNotMatching");

    function button_clicked() {
        /* Reset border and errors*/
        pass.style.border = "2px groove #D7FBEF";   
        newPass.style.border = "2px groove #D7FBEF";   
        email.style.border = "2px groove #D7FBEF";   
        errorContainerSmall.innerHTML = "";
        errorContainerNotMatching.innerHTML = "";
        let emptyInput = [];
        if(email.value === "")
        {
            emptyInput.push(email); 
        }
        if (pass.value === "")
        {
            emptyInput.push(pass);
        }
        if (newPass.value === "")
        {
            emptyInput.push(newPass);
        }
        
        empty_input(emptyInput);
        
        if (pass.value.length < 8)
        {
            small_password();
        }

        if (pass.value != newPass.value) 
        {
            incorrect_pass();
        }

    }

    function empty_input(array){
        if (array.length === 0) {
            return;
        }
        for (let i = 0; i < array.length; i++) {
            array[i].style.border = "3px dashed red";   
        }
    }
    function small_password(){
        errorContainerSmall.innerHTML = "<h4>Please enter at least 8 characters.</h4>"; 
        pass.style.border = "3px dashed red";   
        newPass.style.border = "3px dashed red";  
    }

    function incorrect_pass(){
       errorContainerNotMatching.innerHTML = "<h4>Please enter at matching passwords.</h4>"
       pass.style.border = "3px dashed red"; 
       newPass.style.border = "3px dashed red"; 
    }
