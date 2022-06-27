import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='orders' element={<Orders />}></Route>
        <Route path='inventory' element={<Inventory />}></Route>
        <Route path='about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
