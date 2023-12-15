import './cart-dropdown.styles.scss';
import '../../styles/main.scss';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

import { useCartGlobalContext } from '../../context/cart.context';

const CartDropDown = () => {

    const navigate=useNavigate();
    const goToCartHandler=()=>{
        navigate('/cart')
    }

    const {cartItems} = useCartGlobalContext();

    return ( 

        <div className="cart-dropdown-container">
            <div className="cart-items">
              {cartItems.map((cartItem)=>(
                <CartItem
                 key={cartItem.id}
                 {...cartItem}
                 />
              ))}
            </div>
            <button 
            type='submit'
            onClick={goToCartHandler}
            >
                 Go to Checkout</button>
        </div>
     );
}
 
export default CartDropDown;