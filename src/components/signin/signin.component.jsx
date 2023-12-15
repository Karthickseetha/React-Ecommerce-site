import './signin.styles.scss';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  signInAuthUserEmailAndPassword 
} from '../../utils/firebase/firebase'
import { useState } from 'react';
const defaultFormFields={
    email: '',
    password: ''
}

const SignIn = () => {
    
    const [formFields,setFormFields]=useState
    (defaultFormFields); 

    const {email,password} = formFields;

    
  const submitHandler = async (e) => {
    e.preventDefault();

    if (  email && password ) {
    
        try{
            const {user} = await signInAuthUserEmailAndPassword(
                email,
                password,
            );
            if(user){
              alert('Sign In successfully');
            }
            // console.log(response);
        } catch(err){
            if(err.code === `auth/invalid-credential`){
          alert(`No user associted with this email`)
        }
        else if (err.code == `auth/wrong-password`){
          alert(`Incorrect Password`)
        }
            console.log(`Error Occured while sign In`,err.code)
        }
      setFormFields(defaultFormFields);
    } else {
      alert('All fields are mandatory');
      return;
    }
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormFields({ ...formFields, [key]: value });
  };


  const logGoogleUser =async()=>{
    const {user} = await signInWithGooglePopup();
   
   
    const userDocRef =await createUserDocumentFromAuth(user);
    
    // console.log(user);
}
    return ( 
        <>
    
    <div className="signin-container">
     
      <h2>Sign In</h2>
        <h2>If you have an account,Sign In here.

        </h2>
        
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
                 <button type='submit'>
                    Sign In
                 </button>
                 <button
                 type='button'
        onClick={logGoogleUser}>
            SignIn with Google
        </button>

            </div>
        </form>
    </div>


        </>
     );
}
 
export default SignIn;