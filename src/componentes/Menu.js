import React from 'react';
import navBarLogo from './assets/img/logo_voca.svg'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import AOS from 'aos';

AOS.init({
});

const Menu = () => {
    return (
            <nav className="navbar navbar-expand-lg  fixed-top" id="mainNav">
            <div className="container" data-aos="fade-in">
                <Link to="">
                    <a className="navbar-brand" >
                        <img src={navBarLogo} alt="..." id="logo-tamano" className="ms-auto" style={{ height:"55px"}}></img>
                    </a>
                </Link>
                <button  data-aos="fade-in"  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars ms-1" id="menus"/>
                </button> 
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        {/* <li className="nav-item"><a className="nav-link" href="#services" style={{borderColor:"yellow", borderWidth:"medium"}}>Contenido</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio" style={{borderColor:"yellow", borderWidth:"medium"}}>Portafolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" style={{borderColor:"yellow", borderWidth:"medium"}}>Acerca</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team" style={{borderColor:"yellow", borderWidth:"medium"}}>Equipo</a></li> */}
                        <Link to="" style={{textDecoration:"none"}}><li className="nav-item"><a className="nav-link"  style={{borderColor:"yellow", borderWidth:"medium"}}>Home</a></li></Link>
                        <Link to="/videos" style={{textDecoration:"none"}}><li className="nav-item"><a className="nav-link"  style={{borderColor:"yellow", borderWidth:"medium"}}>Mas información</a></li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;