//import logo from './logo.svg';
import './App.css';



//Import components of app
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import ItemListContainer from './components/ItemListContainer';

//Main comp. Here we mount all components to be rendered
function App() {

  
  return (
    <>
      <div className="App">
        <NavbarComp/>
        
        <ItemListContainer greetings={"Mariano"}/>
      </div>
    </>
  );
}



export default App;
