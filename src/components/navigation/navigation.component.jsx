import {Link} from 'react-router-dom'

import './navigation.styles.scss'
import Logo from '../../assets/images/logo.png'


import { signOutUser } from '../../utils/firebase/firebase'
import { useUserGlobalContext } from '../../context/user.context';
import { useCartGlobalContext } from '../../context/cart.context';
import CartIcon from '../cart-icon/carticon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Navbar = () => {

    const {currentUser} =useUserGlobalContext();
    const {isCartOpen} = useCartGlobalContext();


    const signOutHandler = async()=>{
      await signOutUser();
    }
    

    return ( 
      <>
        <nav >
        <div className="logo-container">
        <Link  to='/'>
          <img src={Logo}
           alt="logo" />
           </Link>
        </div>
        <ul>
          <li className='nav-item'> 
          <Link 
          className='nav-link'
          to='/'>Home</Link>
          </li>
          <li className='nav-item'> 
          <Link 
          className='nav-link'
          to='/shop'>Shop</Link>
          </li>
          <li className='nav-item'> 
          <Link 
          className='nav-link'
          to='/contact'>Contact</Link>
          </li>

        <CartIcon />
          
        </ul>
        
        {isCartOpen && <CartDropDown/>}


        {currentUser ? (
          
           <li className='nav-signout'
           onClick={signOutHandler}
           > SignOut</li>
        ) :(
            <li className='nav-signin'> 
          <Link 
          className='nav-link'
          to='/auth'>SignIn</Link>
          </li>
        )}


      </nav>
      
      </>

     );
}
 
export default Navbar;