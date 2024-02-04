import { SignIn, SignUp } from "../../components";
import { useUserGlobalContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './auth.styles.scss';
const Auth = () => {
    
    const {currentUser}=useUserGlobalContext();
     
    const navigate =useNavigate();
   useEffect(()=>{
    if(currentUser){
        navigate('/');
        return;
    }
   })
    
    return ( 
        <>
        <div className="container">
        <SignIn/>
        <br />
        <SignUp/>
        </div>

        <div className="credential">
            <h2>User Credential</h2>
          <p>Email: karthick123@gmail.com</p>
          <p>Password: 123456</p>
        </div>
        </>
     );
}
 
export default Auth;