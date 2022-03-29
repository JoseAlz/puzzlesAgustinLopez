import { useState } from 'react';
import "./ItemCount.css";
import Button from '@mui/material/Button';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
const ItemCount = ({stock}) => {
    
    
    const initial= 0;
    const [cantidad, setContador] = useState(0);
    
    
    const ClickSumar = () => {
         setContador (cantidad +1);
        };
    const ClickRestar= () => {
        setContador (cantidad -1);
    };   


    return (<div className="btnContadores">
        <Button className="botones" onClick={ClickSumar} disabled={cantidad === stock ? true : false} > + </Button>
        <Button className="botones" onClick={ClickRestar} disabled={cantidad === initial ? true : false} >-</Button>
        <p> Cantidad: {cantidad}</p>
        <Button className="botonAgregarCarro" defined >Sumar al carro</Button>

        </div>
    )

}
export default ItemCount;