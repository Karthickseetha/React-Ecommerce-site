import React from 'react';
import { useCartGlobalContext } from '../../context/cart.context';
import { useUserGlobalContext } from '../../context/user.context';
import { addOrderToFirestore } from '../../utils/firebase/firebase';
import toast, { Toaster } from 'react-hot-toast';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useCartGlobalContext();
    const { currentUser } = useUserGlobalContext();

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    const orderNowHandler = async () => {
        // Prepare order details
        const orderDetails = {
            userId: currentUser.uid,
            items: [cartItem], // Include only the current cart item in the order
            createdAt: new Date(),
        };

        try {
            // Save order to Firestore
            await addOrderToFirestore(currentUser.uid, orderDetails);

            // Show order placed notification (you can replace this with your notification logic)
            toast.success(`Order Placed!`);

            // Clear the current item from the cart
            clearItemFromCart(cartItem);
        } catch (error) {
            // Handle any errors here, e.g., show an error toast
            console.error('Error placing order:', error);
            toast.error('Error placing order. Please try again.');
        }
    };

    return (
        <>
            <Toaster />

            <div className="checkout-item-container">
                <div className="image-container">
                    <img src={imageUrl} alt={name} />
                </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={removeItemHandler}>
                        &#10094;
                    </div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={addItemHandler}>
                        &#10095;
                    </div>
                </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick={clearItemHandler}>
                    &#10005;
                </div>
                <button className="order-now-button" onClick={orderNowHandler}>
                    Order Now
                </button>
            </div>
        </>
    );
};

export default CheckoutItem;
