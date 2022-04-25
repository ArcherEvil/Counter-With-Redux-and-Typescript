import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
