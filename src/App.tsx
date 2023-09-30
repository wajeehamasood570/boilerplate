import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowMessage from './components/ShowMesage';
import FormGrid from './components/FormGrid';
import Switches from './components/Switches';
import ButtonIcons from './components/ButtonIcons';
import Routing from './config/router/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Routing/>
        {/* <FormGrid/>
        <Switches/>
        <ButtonIcons/>
        <ShowMessage/> */}
     
    </div>
  );
}

export default App;
