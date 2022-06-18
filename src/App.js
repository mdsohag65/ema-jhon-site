import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
