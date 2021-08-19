import React from 'react';
import Curvas from './assets/img/graduacion/fondo.svg';
import Picos from './assets/img/graduacion/fondo2.svg';
import Prueba from './assets/img/graduacion/IMG_20180822_110531 - copia.jpg';
import Prueba3 from './assets/img/graduacion/IMG_20191022_073420.jpg';
import Prueba5 from './assets/img/graduacion/IMG_20200211_093602.jpg';
import Prueba6 from './assets/img/graduacion/IMG_20200310_093101.jpg';
import Prueba7 from './assets/img/graduacion/b6de7421-01ce-49c6-9a08-dbdb3411612d.jpg';
import Prueba8 from './assets/img/graduacion/photo4965276992597502448.jpg';
import Prueba9 from './assets/img/graduacion/7616cfe8-409a-4008-9031-05f770a16422.jpg';
import Prueba10 from './assets/img/graduacion/photo4965276992597502451.jpg';
import Prueba11 from './assets/img/graduacion/1.jpg';
import Prueba12 from './assets/img/graduacion/2.jpg';
import Prueba13 from './assets/img/graduacion/3.jpg';
import Prueba14 from './assets/img/graduacion/4.jpg';
import Prueba15 from './assets/img/graduacion/5.jpg';
import Prueba16 from './assets/img/graduacion/8.jpeg';
import Prueba17 from './assets/img/graduacion/9.jpeg';
import Prueba18 from './assets/img/graduacion/1010.jpeg';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import AOS from 'aos';

AOS.init({
});

const Graduaciones = () => {

    return (
        <div>
            <div id="fondo1" style={{ height: "970px", margin: "0px", padding: "0px", boxSizing: 'border-box' }}>
                <h2 id="h2Texto2" style={{ paddingTop: "350px", zIndex: 101 }}>Conoce a nuestras generaciones</h2>
                <img id="monta" src={Curvas} alt='like' style={{ paddingTop: "555px" }} />
                <h2 id="h2Texto3" style={{ zIndex: 102, marginTop: 555 }}>Te gustaria saber mas sobre nosostros?</h2>
            </div>
            <div id="" style={{ margin: 0 }}></div>
            <img id="subsuelo" src={Picos} alt="like"></img>
            <div style={{ padding: 35, backgroundColor: "#d7d8d6", margin: 0 }}>
                {/* <AliceCarousel mouseTracking items={items} /> */}
                <h1 style={{textAlign:"center", marginBottom:"45px", marginTop:"45px"}}>GENERACIONES</h1>
                <div style={{textAlign:"center"}} className="row row-cols-1 row-cols-md-3 g-4">
                    <Gallery> 
                        <Item
                            original={Prueba}
                            thumbnail={Prueba}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba} alt="..." id="bordergeneracion" data-aos="zoom-in-right"hidden/>
                            )}
                        </Item>
                       
                        <Item
                            original={Prueba3}
                            thumbnail={Prueba3}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba3} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                        
                        <Item
                            original={Prueba5}
                            thumbnail={Prueba5}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba5} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba7}
                            thumbnail={Prueba7}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba7} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba6}
                            thumbnail={Prueba6}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba6} alt="..." id="bordergeneracion" data-aos="zoom-in-right"hidden/>
                            )}
                        </Item>
                        <Item
                            original={Prueba8}
                            thumbnail={Prueba8}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba8} alt="..." id="bordergeneracion" data-aos="zoom-in-right"hidden/>
                            )}
                        </Item>
                        <Item
                            original={Prueba9}
                            thumbnail={Prueba9}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba9} alt="..." id="bordergeneracion" data-aos="zoom-in-right" hidden/>
                            )}
                        </Item>
                        <Item
                            original={Prueba10}
                            thumbnail={Prueba10}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba10} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba11}
                            thumbnail={Prueba11}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba11} alt="..." id="bordergeneracion" data-aos="zoom-in-right" hidden/>
                            )}
                        </Item>
                        <Item
                            original={Prueba12}
                            thumbnail={Prueba12}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba12} alt="..." id="bordergeneracion" data-aos="zoom-in-right" hidden/>
                            )}
                        </Item>
                        <Item
                            original={Prueba13}
                            thumbnail={Prueba13}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba13} alt="..." id="bordergeneracion" data-aos="zoom-in-right" hidden/>
                            )}
                        </Item>

                        <Item
                            original={Prueba14}
                            thumbnail={Prueba14}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba14} alt="..." id="bordergeneracion" data-aos="zoom-in-right" hidden/>
                            )}
                        </Item>

                        <Item
                            original={Prueba15}
                            thumbnail={Prueba15}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba15} alt="..." id="bordergeneracion" data-aos="zoom-in-right" hidden/>
                            )}
                        </Item>

                        <Item
                            original={Prueba16}
                            thumbnail={Prueba16}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba16} alt="..." id="bordergeneracion" data-aos="zoom-in-right" />
                            )}
                        </Item>

                        <Item
                            original={Prueba17}
                            thumbnail={Prueba17}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba17} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                       
                        <Item
                            original={Prueba18}
                            thumbnail={Prueba18}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba18} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>

                    </Gallery>
                </div>
            </div>
        </div>
    );
};

export default Graduaciones;