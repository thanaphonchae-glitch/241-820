function submitData() {
    let firstName = document.querySelector('input[name="firstName"]');
    let lastName = document.querySelector('input[name="lastName"]');
    let age = document.querySelector('input[name="age"]');

    let gender = document.querySelector('input[name="gender"]:checked');
    let interests = document.querySelectorAll('input[name="interest"]:checked');
    let description = document.querySelector('textarea[name="description"]');
    
    let interest=''
    for (let i = 0; i < interests.length; i++) {
        interest+=interests[i].value
        if(i!==interests.length-1){
            interest+=', '
        }
    }

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderdDOM.value,
        description: descriptionDOM.value,
        interests: []
    }
    console.log("submitData -> userData", userData);
}
