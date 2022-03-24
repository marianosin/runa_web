//import logo from './logo.svg';
import './App.css';


//Import components of app
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Saludar from './components/Saludar';

//Main comp. Here we mount all components to be rendered
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Saludar name={'Mariano'} lastname={'Radusky'} />
    </div>
  );
}



export default App;
