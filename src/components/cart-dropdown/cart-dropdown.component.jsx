// CartDropDown.js

import React, { useRef, useState, useEffect } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useCartGlobalContext } from '../../context/cart.context';
import { useUserGlobalContext } from '../../context/user.context'; // Import user context
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const navigate = useNavigate();
    const { cartItems, isCartOpen, setIsCartOpen } = useCartGlobalContext();
    const { currentUser } = useUserGlobalContext(); // Get user information

    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 10, y: 90 });
    const cartRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDragging) {
                const newX = event.clientX;
                const newY = event.clientY;
                setPosition({ x: newX, y: newY });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const handleMouseDown = (event) => {
        setIsDragging(true);
    };

    const goToCartHandler = () => {
        setIsCartOpen(!isCartOpen);
    };

    const goToCheckoutHandler = () => {
        // Check if the user is signed in
        if (currentUser) {
            navigate('/cart');
        } else {
            // Redirect to the sign-in page if not signed in
            navigate('/auth');
        }
    };

    return (
        <div
            className={`cart-dropdown-container ${isDragging ? 'dragging' : ''}`}
            ref={cartRef}
            style={{ top: position.y, left: position.x }}
        >
            <div className="cart-items" onMouseDown={handleMouseDown}>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))
                ) : (
                    <p className="empty-message">Your cart is empty</p>
                )}
            </div>
            <div className="cart-buttons">
                <button type="button" onClick={goToCheckoutHandler}>
                    Go to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartDropDown;
