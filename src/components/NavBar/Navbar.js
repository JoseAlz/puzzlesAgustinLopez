import React from "react";
import Logo from "../NavBar/Img/logo.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../NavBar/styleNavBar.scss";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <div className="headerBox">
            <header>
                <nav>
                    <Link to={"./"}> <img src={Logo} className="logoNav" /></Link>
                    <div className="btnNav">
                        <Link to={"./"}><Button className="btn" variant="outlined">INICIO</Button></Link>
                        {/* <Link to={"./alcoholica"}><Button className="btn" variant="outlined">Bebidas Alcoholicas</Button></Link> */}
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="btn"
                            variant="outlined"
                        >
                            PRODUCTOS
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link to={"./cervezas"}><MenuItem className="subMenu" onClick={handleClose}>Cervezas</MenuItem></Link>
                            <Link to={"./aperitivos"}><MenuItem className="subMenu" onClick={handleClose}>Aperitivos</MenuItem></Link>
                            <Link to={"./vinos"}><MenuItem className="subMenu" onClick={handleClose}>Vinos</MenuItem></Link>
                            <Link to={"./champagne"}><MenuItem className="subMenu" onClick={handleClose}>Champagnes</MenuItem></Link>
                            <Link to={"./whiskeys"}><MenuItem className="subMenu" onClick={handleClose}>Whiskeys</MenuItem></Link>
                            <Link to={"./gaseosas"}><MenuItem className="subMenu" onClick={handleClose}>Gaseosas</MenuItem></Link>
                            <MenuItem className="subMenu" onClick={handleClose}>Whiskeys</MenuItem>
                        </Menu>
                        <Link to={"./faq"}><Button className="btn" variant="outlined">FAQ </Button></Link>
                        <Link to={"./contacto"} ><Button className="btn" variant="outlined">Contacto</Button></Link>


                    </div>

                    <div className="iconosNav">

                        <CartWidget />

                    </div>


                </nav>

            </header>
        </div>


    )
}
export default NavBar; 