import React from "react";
import { getProductos } from "../../utils/firebase.js";
import { useState, useEffect } from "react";
import { ItemList} from '../ItemList/ItemList.jsx';
import { useParams } from "react-router-dom";


export const ItemsListContainer = () => {
  const {idCategoria} = useParams();
  const [productos, setProductos] = useState([idCategoria]);
  useEffect(()=>{
    if(idCategoria){
      getProductos().then(products => {
        const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria));
        const items = <ItemList prods={prods} plantilla="Item"/>
        console.log(items);
        setProductos(items);
        console.log("if");
      });
    }else{
      getProductos().then(prods => {
        const items = <ItemList prods={prods} plantilla="Item"/>;
        console.log(items);
        setProductos(items);
        console.log("Else");
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
