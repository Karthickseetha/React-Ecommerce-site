// SignIn.js
import React, { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserEmailAndPassword } from '../../utils/firebase/firebase';
import { toast, Toaster } from 'react-hot-toast';
import './signin.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { user } = await signInAuthUserEmailAndPassword(email, password);
        if (user) {
          toast.success('Signed In Successfully');
          // Add any additional logic after successful sign in if needed
        }
      } catch (err) {
        if (err.code === `auth/invalid-credential`) {
          toast.error(`No user associated with this email`);
        } else if (err.code === `auth/wrong-password`) {
          toast.error(`Incorrect Password`);
        }
        console.log(`Error Occurred while signing In`, err.code);
      }
      setFormFields(defaultFormFields);
    } else {
      toast.error('All fields are mandatory');
      return;
    }
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormFields((prevFields) => ({ ...prevFields, [key]: value }));
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    toast.success('Signed In Successfully with Google');
    // Add any additional logic after successful Google sign in if needed
  };

  return (
    <>
      <div className="signin-container">
        <h2>Sign In</h2>
        <h2>If you have an account, Sign In here.</h2>

        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              value={email}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              value={password}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="button-group">
            <button type="submit">Sign In</button>
            <button type="button" onClick={logGoogleUser}>
              SignIn with Google
            </button>
          </div>
        </form>

        <Toaster />
      </div>
    </>
  );
};

export default SignIn;
