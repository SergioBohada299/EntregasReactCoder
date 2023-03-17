import React from "react";
import {consultarBD} from "../../utils/funciones.js";
import { useState, useEffect } from "react";
import { ItemList} from '../ItemList/ItemList.jsx';
import { useParams } from "react-router-dom";


export const ItemsListContainer = () => {
  const {idCategoria} = useParams();
  const [productos, setProductos] = useState([idCategoria]);
  useEffect(()=>{
    if(idCategoria){
      consultarBD('../json/productos.json').then(products => {
        const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria));
        const items = ItemList({prods});
        console.log(items);
        setProductos(items);
      });
    }else{
      consultarBD('./json/productos.json').then(prods => {
        const items = ItemList({prods});
        console.log(items);
        setProductos(items);
      });

    }

  }, []);
  return (
    <div className='row'>
      {productos}
    </div>
  );
};

export default ItemsListContainer;
