import './App.css';
import Nav from './Nav'
import About from './About';
import Shop from './Shop'
import Home from './Home'
import Item from './newItem'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
