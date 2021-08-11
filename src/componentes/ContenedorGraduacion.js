import React, { useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import './css/graduacion.css';
import Graduaciones from './Graduaciones';

const ContenedorGraduacion = () => {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    return ( 
    
        <div >

        <Menu />
        <Graduaciones />
        <svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 1440 320" >
        <path fill = "#d7d8d6"
        fillOpacity = "1"
        d = "M0,96L240,96L480,192L720,224L960,64L1200,160L1440,64L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z" > </path></svg >
        <h1 style = {
            { textAlign: "center" }
        } > GRACIAS POR aa </h1>  
        <svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 1440 320" > < path fill = "#000000"
        fillOpacity = "1"
        d = "M0,160L288,96L576,96L864,256L1152,160L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z" > </path></svg >
        <Footer />
        </div>
    );
};

export default ContenedorGraduacion;