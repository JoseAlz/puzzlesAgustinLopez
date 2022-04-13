import { useState, useContext } from 'react';
import "./ItemCount.css";
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext';

const ItemCount = ({stock, addProduct}) => {
    
    const {cartProducts, agregarProductoCarro, } = useContext(CartContext)
    
    const initial= 1;
    const [qty, setContador] = useState(1);
    
    
    const ClickSumar = () => {
         setContador (qty +1);
        };
    const ClickRestar= () => {
        setContador (qty -1);
    };   


    return (<div className="btnContadores">
        <Button className="botones" onClick={ClickSumar} disabled={qty === stock ? true : false} > + </Button>
        <Button className="botones" onClick={ClickRestar} disabled={qty === initial ? true : false} >-</Button>
        <p> Cantidad: {qty}</p>
        <Button className="btnAgregarCarro" onClick={() => addProduct(qty)}>Agregar</Button>
        

        </div>
    )

}

export default ItemCount;