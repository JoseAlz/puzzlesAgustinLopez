import { useState } from 'react';
import "./ItemCount.css";
import Button from '@mui/material/Button';

const ItemCount = ({stock, addProduct}) => {
    
    
    const initial= 1;
    const [cantidad, setContador] = useState(1);
    
    
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
        <Button onClick={() => addProduct(cantidad)}>Agregar</Button>
        

        </div>
    )

}
export default ItemCount;