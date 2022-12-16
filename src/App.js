import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Shoes from './Components/ShoesComponents/Shoes';


function App() {
  return (
    < div className="App">
      <div className='block'>
        <AllCategories />
      <div className='block product'>
        <Shoes />
      </div>
      </div>
      <div className='block'>
        <Cart />
      </div>
      </div>
    
  );
}

export default App;
