import React, {useState} from "react";
import Logo from "../NavBar/Img/logo.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../NavBar/NavBar.scss";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openMenu, setOpenMenu]= useState(false)


    return (

        
            <header>
                <AppBar position="sticky" color="default" className="appBar" >
                    <Container maxWidth="md" >
                        <Toolbar disableGutters>

                            <Link to={"./"}> <img src={Logo} className="logoNav" /></Link>
                            <Box className="btnBox" sx={{ display: { xs: "none", sm: 'none', md: "inline-flex" } }}>
                                
                                    <Link to={"./"}>
                                        <Button className="btn" variant="text">INICIO</Button>
                                    </Link>

                                    <Button

                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className="btn"
                                        variant="text"
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

                                    </Menu>
                                    <Link to={"./faq"}><Button className="btn" variant="text">FAQ </Button></Link>
                                    <Link to={"./contacto"} ><Button className="btn" variant="text">Contacto</Button></Link>


                                
                            </Box>
                            <div className="iconosNav">

                                <CartWidget />

                            </div>
                            <IconButton sx={{ display: { xs: "inline-flex", sm: 'inline-flex', md: "none" } }} className="btnMenuResponsive">

                                <MenuIcon onClick={()=> setOpenMenu(true)}/>
                            </IconButton>
                            

                        </Toolbar>
                    </Container>
                    <SwipeableDrawer anchor="right" open={openMenu} onOpen={()=> setOpenMenu(true)} onClose={()=> setOpenMenu(false)} >
                        <div>
                        <IconButton>
                            <ChevronRightIcon onClick={()=> setOpenMenu(false)}/>
                        </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem>
                        <Link to={"./"}>
                            INICIO
                        </Link>
                        </ListItem>
                                    <ListItem>
                        <Button

                            id="basic-button2"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="btn"
                            variant="text"
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

                        </Menu>
                        </ListItem>
                        <ListItem>
                        <Link to={"./faq"}> FAQ </Link>
                        </ListItem>
                        <ListItem>
                        <Link to={"./contacto"} >CONTACTO</Link>
                        </ListItem>
                        </List>
                    </SwipeableDrawer>
                </AppBar>

            </header>
        


    )
}
export default NavBar; 