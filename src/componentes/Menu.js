import React from 'react';
import navBarLogo from './assets/img/logo_voca.svg'
import {BrowserRouter as Switch,Link} from "react-router-dom";
import AOS from 'aos';

AOS.init({
});

const Menu = () => {
    return (
            <nav className="navbar navbar-expand-lg  fixed-top" id="mainNav">
            <div className="container" data-aos="fade-in">
                <Switch></Switch>
                <Link to="">
                    <p className="navbar-brand" >
                        <img src={navBarLogo} alt="..." id="logo-tamano" className="ms-auto" style={{ height:"55px", marginTop:"10px"}}></img>
                    </p>
                </Link>
                <button  data-aos="fade-in"  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars ms-1" id="menus"/>
                </button> 
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <Link to="" style={{textDecoration:"none"}}><li className="nav-item"><p className="nav-link"  style={{borderColor:"yellow", borderWidth:"medium"}}>Inicio</p></li></Link>
                        <Link to="/videos" style={{textDecoration:"none"}}><li className="nav-item"><p className="nav-link"  style={{borderColor:"yellow", borderWidth:"medium"}}>Mas información</p></li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;