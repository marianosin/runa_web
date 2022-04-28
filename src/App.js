//import logo from './logo.svg';
import './App.css';
import './style/main.css';


//Import components of app
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './components/cart/CartContext';
import ItemListContainer from './components/items/ItemListContainer';
import TestContainer from './components/tests/TestContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CategoryContainer from './components/items/CategoryContainer';
import Cart from './components/cart/Cart';
import NavContainer from './components/navbar/NavContainer';
import SearchContainer from './components/items/SearchContainer';
import FirestoreContainer from './components/firestore/FirestoreContainer';

//Main comp. Here we mount all components to be rendered
function App() {

  
  return (
    <CartContextProvider>
      <div className="App">
        {/*Everything has to be inside this router */}
        <BrowserRouter>
          <NavContainer />
          <Routes>
            <Route exact path='/' element={<ItemListContainer  />}/>
            <Route path='/cart' element={<Cart  />}/>
            <Route exact path='/productdetail' element={<TestContainer  />}/>
            <Route exact path='/nosotros' element={<div>Página test para probar router</div>}/>
            {/*<Route exact path='/search/:search' element={<SearchContainer  />}/>*/}
            <Route exact path='/category/:category' element={<CategoryContainer  />}/>
            <Route exact path='/category/:category/product/:id' element={<ItemDetailContainer  />}/>
            <Route exact path='/firestore' element={<FirestoreContainer  />}/>
          </Routes>   
          

          {/*<ItemListContainer  />*/}
          {/*<ItemDetailContainer/>*/}

        </BrowserRouter>

      </div>
    </CartContextProvider>
  );
}



export default App;
