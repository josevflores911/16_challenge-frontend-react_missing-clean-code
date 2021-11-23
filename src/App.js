import React from 'react';
import {Button} from './components/layout/Button';
import {Encabezado} from './components/layout/Encabezado';
import Card from './components/layout/Card'
import Lista from './pages/Lista'
import Search from './pages/Search'

import Produto from './pages/Produto'

import './App.css';

import {
  BrowserRouter ,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

//import Page1 from './pages/Page1';
//import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
        <Encabezado backgroundColor="#97c8e6"><h1>REACT CRUD</h1></Encabezado> 

        <div className="Cards">
          <Card titulo="Painel de Edicao" color="#97c8e6">

           <Routes>
             <Route path="/save" exact element={<Produto/>} />
             <Route path="/consult" exact element={<Search/>} />
             <Route path="/" exact element={<Page3/>} />
           </Routes>
          </Card>

           <Card titulo="Lista de Produtos" color="#97c8e6" >
             <Lista></Lista>
           </Card>         
        </div>

        <Button backgroundColor="#2ba0a6">
            <Link to="/save">Gravar</Link><br/>
        </Button>
        <Button backgroundColor="#2ba0a6">
            <Link to="/consult">Edicion</Link><br/>
        </Button>
        <Button backgroundColor="#2ba0a6">
            <Link to="/">Contact Us</Link>
        </Button>
    </div>
    </BrowserRouter>
  );
}

export default App;
