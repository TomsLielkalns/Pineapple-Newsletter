var emailSuccess = false;
var tosSuccess = false;

function enableButton(){
    if(emailSuccess && tosSuccess){
        document.getElementById("submit").disabled = false;
        return;
    }
    else{
        document.getElementById("submit").disabled = true;
        return;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailBox = document.getElementById("email");
    var emailLine = document.getElementById("email-line");
    var emailError1 = document.getElementById("email-error1");
    var emailError2 = document.getElementById("email-error2");
    var emailError3 = document.getElementById("email-error3");
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var columbiaEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.co)$/; 

    if(email){
        emailError1.style.display = "none";
        if(email.match(validEmail)){
            emailError3.style.display = "none";
            if(email.match(columbiaEmail)){
                emailError2.style.display = "block";
                emailSuccess = false;
                emailLine.style.background = "#B80808";
                emailBox.style.border = "1px solid #B80808";
            }
            else{
                emailError2.style.display = "none";
                emailSuccess = true;
                emailLine.style.background = "#4066A5";
                emailBox.style.border = "1px solid #E3E3E4";
            }
        }
        else {
            emailError2.style.display = "none";
            emailError3.style.display = "block";
            emailSuccess = false;
            emailLine.style.background = "#B80808";
            emailBox.style.border = "1px solid #B80808";
        }
    }
    else{
        emailError3.style.display = "none";
        emailError2.style.display = "none";
        emailError1.style.display = "block";
        emailSuccess = false;
        emailLine.style.background = "#B80808";
        emailBox.style.border = "1px solid #B80808";
    }
    enableButton();
    return;
}

function validateTOS(){
    var checkboxError = document.getElementById("checkbox-error");

    if(document.getElementById("ToS").checked){
        checkboxError.style.display = "none";
        tosSuccess = true;
    }
    else{
        checkboxError.style.display = "block";
        tosSuccess = false;
    }
    enableButton();
    return;
}

function submit_form(){
    var newsletter = document.getElementById("email-submission");
    var successful = document.getElementById("successful-subscription");
    newsletter.style.display = "none";
    successful.style.display = "block";
    return;
}