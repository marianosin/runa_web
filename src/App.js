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
            <Route exact path='/test' element={<div>Página test para probar router</div>}/>
          </Routes>   
          

          {/*<ItemListContainer  />*/}
          {/*<ItemDetailContainer/>*/}

        </BrowserRouter>

      </div>
    </>
  );
}



export default App;
