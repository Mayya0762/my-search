import dataShoes from "../../data/dataShoes";
import image from './trash.png';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  
   const shoes = dataShoes.find(item => item.id === cartItem.couplaId)
   const dispatch = useDispatch();
   
    return(<div>
       <img className="small" src={`${shoes.img}.jpg`} alt="smallShoes"/>
       <p>{shoes.name}</p>
       <p>{cartItem.quantity} pair(s)</p>
       <p>Price: ${shoes.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className='trashIcon' src={image} alt="Trash" />
       </span>
       
    </div>)
}

export default CartItem;