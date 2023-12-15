import './carticon.styles.scss';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useCartGlobalContext } from '../../context/cart.context';




const CartIcon = () => {

    const {isCartOpen,setIsCartOpen,cartCount}=useCartGlobalContext();

    const cartDropDownHandler =()=>{
        setIsCartOpen(!isCartOpen)
    }

    return (
         <div className="cart-icon-container">

           <LiaShoppingBagSolid  className='shopping-icon'/>
           <span className='item-count' 
           onClick={cartDropDownHandler}
           >{cartCount}</span>

    </div>
     );
}
 
export default CartIcon;