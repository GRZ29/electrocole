import React from 'react';
import Curvas from './assets/img/graduacion/fondo.svg';
import Picos from './assets/img/graduacion/fondo2.svg';
import Prueba from './assets/img/graduacion/IMG_20180822_110531 - copia.jpg';
import Prueba2 from './assets/img/graduacion/IMG_20190816_122506.jpg';
import Prueba3 from './assets/img/graduacion/IMG_20191022_073420.jpg';
import Prueba4 from './assets/img/graduacion/IMG_20191022_113231.jpg';
import Prueba5 from './assets/img/graduacion/IMG_20200211_093602.jpg';
import Prueba6 from './assets/img/graduacion/IMG_20200310_093101.jpg';
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
                                <img ref={ref} onClick={open} src={Prueba} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba2}
                            thumbnail={Prueba2}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba2} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
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
                            original={Prueba4}
                            thumbnail={Prueba4}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba4} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
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
                            original={Prueba6}
                            thumbnail={Prueba6}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba6} alt="..." id="bordergeneracion" data-aos="zoom-in-right"/>
                            )}
                        </Item>
                    </Gallery>
                </div>
            </div>
        </div>
    );
};

export default Graduaciones;