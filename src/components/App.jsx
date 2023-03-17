import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import {Navbar} from './Navbar/Navbar.jsx';
import {ItemsListContainer} from './ItemsListContainer/ItemsListContainer.jsx';
import {ItemDetail} from './ItemDetail/ItemDetail.jsx';
import {ItemCount} from './ItemCount/ItemCount.jsx';
import {Item} from './item/Item.jsx';
import {ItemDetailContainer} from './ItemDetailContainer/ItemDetailContainer.jsx';

export const App = () => {
  
  return (
    <div className="App">
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemsListContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemsListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
