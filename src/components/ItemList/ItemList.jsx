import React from 'react';
import { Item } from '../item/Item.jsx';
import { UserParams } from 'react-router-dom';

export const ItemList = ({prods}) => {
    console.log(prods);
    return (
        <div className="prods--list">
            {prods.map(producto => <Item item={producto} key={producto.id}/>)}
        </div>
    );
}

export default ItemList;
