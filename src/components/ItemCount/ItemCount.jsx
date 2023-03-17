import React from 'react';
import {useState} from 'react';

export const ItemCount = ({ValInicial,stock,onAdd}) => {
    const [contador, setContador] = useState(ValInicial); //Estado de valor inicial 

    //contador-- no se puede hacer en una constante, hay que hacer contador+ 1

    const sumar = () => {contador < stock && setContador(contador+1);console.log(contador)};
    const restar = () => contador > ValInicial && setContador(contador-1);
    return (
        <div>
            <button className="btn btn-light" onClick={()=>restar()}>-</button>
            {contador}
            <button className="btn btn-light" onClick={()=>sumar()}>+</button>
            <button className="btn btn-light" onClick={()=> onAdd(contador)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
