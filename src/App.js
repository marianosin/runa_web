//import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Saludar from './components/Saludar';
import { render } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Saludar name={'Mariano'} lastname={'Radusky'} />
    </div>
  );
}



export default App;
