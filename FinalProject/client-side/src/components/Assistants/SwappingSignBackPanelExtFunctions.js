
    export const moveToSignUp = () => {

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.add('active');
        (document.querySelector('#signinSignupForm-section ')).classList.add('active');
    }

    export const moveToSignIn = () => {

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.remove('active');
        (document.querySelector('#signinSignupForm-section ')).classList.remove('active');
    }