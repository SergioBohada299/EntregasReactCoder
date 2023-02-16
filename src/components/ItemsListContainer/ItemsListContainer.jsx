import React from "react";
import {consultarBD} from "../../utils/funciones.js";
import { useState, useEffect } from "react";
import { ItemList} from '../ItemList/ItemList.jsx'

export const ItemsListContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(()=>{
    consultarBD('./json/productos.json').then(prods => {
      const items = ItemList({prods});
      console.log(items);
      setProductos(items);
    });
  }, []);
  return (
    <div className='row'>
      {productos}
    </div>
  );
};

export default ItemsListContainer;
