import { SignIn, SignUp } from "../../components";
import { useUserGlobalContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
        </>
     );
}
 
export default Auth;