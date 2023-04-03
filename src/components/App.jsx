import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes
import { Navbar } from "./Navbar/Navbar.jsx";
import { ItemsListContainer } from "./ItemsListContainer/ItemsListContainer.jsx";
import { ItemDetail } from "./ItemDetail/ItemDetail.jsx";
import { ItemCount } from "./ItemCount/ItemCount.jsx";
import { Item } from "./item/Item.jsx";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer.jsx";
import { Checkout } from "./Checkout/Checkout.jsx";
import { Cart } from "./Cart/Cart.jsx";

//firebase
import { cargarBDD } from "../utils/firebase";
import { getProductos } from "../utils/firebase";
import { updateProducto, deleteProducto } from "../utils/firebase";

//Context
import { CarritoProvider } from "../context/CarritoContext";

export const App = () => {
  ///cargarBDD();
  getProductos();
  return (
    <div className="App">
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemsListContainer />} />
            <Route
              path="/category/:idCategoria"
              element={<ItemsListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
