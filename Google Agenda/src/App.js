
import { Calenda } from './calendar/calendar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Criar}  from './Criar/Criar'

function App() {

  return (  
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/' Component={Calenda} />
        <Route path='/Criar' Component={Criar} />
      </Routes>
      </BrowserRouter>
      </> 
  );
}
export default App;
