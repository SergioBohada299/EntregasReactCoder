import React from 'react';
import { Item } from '../item/Item.jsx';
import { UserParams } from 'react-router-dom';
import { ItemCart} from '../ItemCart/ItemCart.jsx';

export const ItemList = ({prods, plantilla}) => {
    console.log(prods);
    console.log(plantilla);
    let plant = String(plantilla)
    return (
        <>
        <div className="prods--list">
          {
            plant === "Item"
            ? 
            prods.map(producto => <Item item={producto} key={producto.id}/>)
            :
            prods.map(producto => <ItemCart item={producto} key={producto.id}/>)
            
            
          }
          </div>
        </>

    );
}

export default ItemList;
