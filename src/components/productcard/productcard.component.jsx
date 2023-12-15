import './productcard.styles.scss';
import '../../styles/main.scss';
import { useCartGlobalContext } from '../../context/cart.context';


const ProductCard = ({product}) => {
    
    const {addItemToCart} =useCartGlobalContext();
    
    const {name,price,imageUrl} =product
     
    const addProductToCart = () => addItemToCart(product);

    
    return ( 
    
        <div className="productcard-container">
            <img src={imageUrl} 
            alt="name" 
            />
            <div className="footer">
                <span className='name'>
                    {name}</span>
                <span className='price'>
                    {price}
                </span>
            </div>


            <button 
            type='button'
            onClick={addProductToCart}>
                Add to cart</button>
        </div>
        );
}
 
export default ProductCard;