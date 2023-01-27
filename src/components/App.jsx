import './App.css';

//Componentes
import {Navbar} from './Navbar/Navbar.jsx';
import {ItemsListContainer} from './Items/ItemsListContainer.jsx';

export const App = () => {
  
  return (
    <div className="App">
      <Navbar/>
      <ItemsListContainer/>
    </div>
  );
}

export default App;
