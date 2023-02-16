import React from 'react';
import { Item } from '../item/Item.jsx';

export const ItemList = ({prods}) => {
    console.log(prods);
    return (
        <div>
            {prods.map(producto => <Item item={producto} key={producto.id}/>)}
        </div>
    );
}

export default ItemList;
