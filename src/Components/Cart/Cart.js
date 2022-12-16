import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
import image from './shopping.png';
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    
    return(<div>
        <img className='cartIcon' src={image} alt="Cart" />
        <h3>TOTAL: ${totalPrice}</h3>
        {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
        
    </div>)
}
export default Cart;