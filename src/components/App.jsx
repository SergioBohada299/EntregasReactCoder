import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import {Navbar} from './Navbar/Navbar.jsx';
import {ItemsListContainer} from './ItemsListContainer/ItemsListContainer.jsx';
import {ItemCount} from './ItemCount/ItemCount.jsx';
import {Item} from './item/Item.jsx';

export const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemsListContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemsListContainer/>}/>
        <Route path='/item/:id' element={<ItemsListContainer/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
