import './App.css';
import Index from './components/index'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
