//import logo from './logo.svg';
import './App.css';
import './style/main.css';


//Import components of app
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/NavbarComp';
import ItemListContainer from './components/items/ItemListContainer';

//Main comp. Here we mount all components to be rendered
function App() {

  
  return (
    <>
      <div className="App">
        
        <NavbarComp />
        
        <ItemListContainer  />
    

        

      </div>
    </>
  );
}



export default App;
