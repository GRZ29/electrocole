import React, { useEffect } from 'react';
import Head from './Head';
import Menu from './Menu';
import Servicios from './Servicios';
import Portfolio from './Portfolio';
import Acerca from './Acerca';
import Team from './Team';
import Footer from './Footer';
import Poppup from './Poppup';

const ContenerdorTodos = () => {

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });

    return (
        <div>
            <Head/>
            <Menu/>
            <Servicios/>
            <Portfolio/>
            <Acerca/>
            <Team/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,160L288,96L576,96L864,256L1152,160L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
            <Footer/>
            <Poppup/>
        </div>
    );
};

export default ContenerdorTodos;