import dataShoes from "../../data/dataShoes";
import Coupla from "./Coupla";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/shoesSlice";


const Shoes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(<div className="box">
        {dataShoes
        .filter(coupla => {
            if (selectedCategory === 'All Type') return true;
            return selectedCategory === coupla.category;
        })
        .map((coupla, index) => <Coupla key={index} coupla={coupla} />)}
    </div>)
}
export default Shoes;