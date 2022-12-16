import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Coupla = ({coupla}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div>
        <img className="picture" src={`${coupla.img}.jpg`} alt="foto"/>
        <h2>{coupla.name}</h2>
        <p>$ {coupla.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({coupla, quantity}));
    }}>Add to Basket</button>
    </div>)
}
export default Coupla;