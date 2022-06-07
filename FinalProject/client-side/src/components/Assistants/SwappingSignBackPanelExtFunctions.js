
    export const moveToSignUp = (setMessageAfterSign) => {

        setMessageAfterSign("");

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.add('active');
        (document.querySelector('#signinSignupForm-section ')).classList.add('active');
    }

    export const moveToSignIn = (setMessageAfterSign) => {

        setMessageAfterSign("");

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.remove('active');
        (document.querySelector('#signinSignupForm-section ')).classList.remove('active');

    }