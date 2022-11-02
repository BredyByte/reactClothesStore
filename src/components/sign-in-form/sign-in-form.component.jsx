import React,{ useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton, {BUTTON_TYPE_CLASSES} from '../customUI/custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import {SignIpContainer, ButtonsContainer} from  './sign-in-form.styles';


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/');
  }

  const handleSubmit =  async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/');

    } catch(error) {
      switch(error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break
        case "auth/user-not-found":
          alert("no user associated with this email");
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields,  [name]: value});
  };

  return (
    <SignIpContainer>
      <h2>Already have an account?</h2>
      <span>
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google sign in</CustomButton>
        </ButtonsContainer>
      </form>
    </SignIpContainer>
  );
};

export default SignInForm;
