//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
 
function submitForm(e){
    e.preventDefault();


    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email')
    var phone = getInputVal('phone');

    
    console.log(name);
    console.log(email);
    console.log(phone);
    
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}