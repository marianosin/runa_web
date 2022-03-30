//import logo from './logo.svg';
import './App.css';
import './style/main.css';


//Import components of app
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import ItemListContainer from './components/ItemListContainer';
import TestContainer from './components/TestContainer';
//Main comp. Here we mount all components to be rendered
function App() {

  
  return (
    <>
      <div className="App">
        
        <NavbarComp />
        
        <ItemListContainer greetings={"Mariano"} />


        <TestContainer />

      </div>
    </>
  );
}



export default App;
