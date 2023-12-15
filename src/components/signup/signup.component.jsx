import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase';
import './signup.styles.scss';
// Your Firebase configuration and functions

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (displayName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const {user} = await createAuthUserWithEmailAndPassword(email, password);
          // const user = userCredential.user;
          // console.log(displayName);
          const userDocRef =await createUserDocumentFromAuth(user,{
            displayName,
          });
          setFormFields(defaultFormFields);
          // console.log(userDocRef);
        } catch (err) {
          if(err.code === `auth/email-already-in-use`){
            alert(`Email already exists`)
          }
          console.log(`Error Occurred while registering`, err.message);
        }
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('All fields are mandatory');
    }
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormFields({ ...formFields, [key]: value });
  };

  return (
    <>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <h4>If you don't have an account, sign up here.</h4>

        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="displayName">Username</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              onChange={changeHandler}
              value={displayName}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="sign-up-email"
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
              id="sign-up-password"
              name="password"
              onChange={changeHandler}
              value={password}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={changeHandler}
              required
              value={confirmPassword}
              placeholder="Confirm your password"
            />
          </div>
          <div className="button-group">
            <button type="submit" value="SignUp" >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
