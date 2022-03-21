import { useState } from 'react';
import "./ItemCount.css";
import Button from '@mui/material/Button';

const ItemCount = ({stock}) => {
    
    
    const initial= 0;
    const [cantidad, useContador] = useState(0);
    
    
    const ClickSumar = () => {
         useContador (cantidad +1);
        };
    const ClickRestar= () => {
        useContador (cantidad -1);
    };   


    return (<div className="btnContadores">
        <Button className="botones" onClick={ClickSumar} disabled={cantidad === stock ? true : false} > + </Button>
        <Button className="botones" onClick={ClickRestar} disabled={cantidad === initial ? true : false} >-</Button>
        <p> Cantidad: {cantidad}</p>
        <Button className="botonAgregarCarro" defined>Sumar al carro</Button>

        </div>
    )

}
export default ItemCount;