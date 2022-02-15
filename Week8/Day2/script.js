
const submitData = () => {

    let nameInput = document.forms.my_form.name.value;
    let lastNameInput = document.forms.my_form.lastName.value;

    if(nameInput.length > 0 && lastNameInput.length > 0){

        let details = {
            name: nameInput,
            lastName: lastNameInput
          };

        let jsonDetails = JSON.stringify(details);

        console.log(jsonDetails);

        return true;
    }
    else{

        return false;
    }
}


 

