//import logo from './logo.svg';
import './App.css';
import './style/main.css';


//Import components of app
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/NavbarComp';
import ItemListContainer from './components/items/ItemListContainer';
import TestContainer from './components/tests/TestContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DynamicElement from './components/items/CategoryContainer';
import CategoryContainer from './components/items/CategoryContainer';
import ItemDetail from './components/items/ItemDetail';
import Cart from './components/cart/Cart';
const item= {name:'test', price:4, quantity:1, total:3}
//Main comp. Here we mount all components to be rendered
function App() {

  
  return (
    <>
      <div className="App">
        {/*Everything has to be inside this router */}
        <BrowserRouter>
          <NavbarComp />
          <Routes>
            <Route exact path='/' element={<ItemListContainer  />}/>
            <Route path='/cart' element={<Cart  />}/>
            <Route exact path='/productdetail' element={<TestContainer  />}/>
            <Route exact path='/nosotros' element={<div>Página test para probar router</div>}/>
            <Route exact path='/category/all' element={<CategoryContainer/>}/>
            <Route exact path='/category/:category/product/:id' element={<ItemDetailContainer  />}/>
          </Routes>   
          

          {/*<ItemListContainer  />*/}
          {/*<ItemDetailContainer/>*/}

        </BrowserRouter>

      </div>
    </>
  );
}



export default App;
