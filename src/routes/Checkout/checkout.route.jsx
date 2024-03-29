import './checkout.styles.scss';
import {CheckoutItem} from '../../components'

import { useCartGlobalContext } from '../../context/cart.context';
const Checkout = () => {
    const {cartItems,cartTotal} =useCartGlobalContext();

    return ( 
    
        <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
     
     {cartItems.map((cartItem)=>{
        return (
            <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
    
        />
        )
     })}

<div className="checkout-total">
<span className="total">
        Total:{`₹${cartTotal}`}
        </span>
    </div>


    </div>
         
     );
}
 
export default Checkout;