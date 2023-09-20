import {BrowserRouter, Route, Routes } from 'react-router-dom';
  import './App.css'
import Principal1 from './components/Principal1';
import Principal2 from './components/Principal2';

function App() {

  return (
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Principal1/>} />
            <Route path="/principal2" element={<Principal2 />} />
            <Route path="/dinamica/:id" element={<Dinamica />} />
            <Route path="/*" element={<h1>404</h1>} />
            
          </Routes>
        </BrowserRouter>
      
  );
}

export default App
