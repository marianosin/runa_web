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
            <Route exact path='/productdetail' element={<TestContainer  />}/>
            <Route exact path='/nosotros' element={<div>Página test para probar router</div>}/>
            <Route exact path='/category/all' element={<div>Aquí se presentarán todas las categorías juntas</div>}/>
            <Route exact path='/category/:category/product/:id' element={<DynamicElement  />}/>
          </Routes>   
          

          {/*<ItemListContainer  />*/}
          {/*<ItemDetailContainer/>*/}

        </BrowserRouter>

      </div>
    </>
  );
}



export default App;
