import React from 'react';
import {useState} from 'react';

export const ItemCount = ({ValInicial,Stock}) => {
    const [contador, setContador] = useState(ValInicial); //Estado de valor inicial 

    //contador-- no se puede hacer en una constante, hay que hacer contador+ 1

    const sumar = () => contador < Stock && setContador(contador+1)
    const restar = () => contador > ValInicial && setContador(contador-1);
    return (
        <div>
            <button className="btn btn-light" onClick={()=>restar()}>-</button>
            {contador}
            <button className="btn btn-light" onClick={()=>sumar()}>+</button>
        </div>
    );
}

export default ItemCount;
