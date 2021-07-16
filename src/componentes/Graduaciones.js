import React from 'react';
import Curvas from './assets/img/graduacion/fondo.svg';
import Picos from './assets/img/graduacion/fondo2.svg';
import Prueba from './assets/img/team/1.jpg';
import Prueba2 from './assets/img/team/2.jpg';
import Prueba3 from './assets/img/team/3.jpg';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

const Graduaciones = () => {

    return (
        <div>
            <div id="fondo1" style={{ height: "970px", margin: "0px", padding: "0px", boxSizing: 'border-box' }}>
                <h2 id="h2Texto2" style={{ paddingTop: "350px", zIndex: 101 }}>Conoce a nuestros graduados</h2>
                <img id="monta" src={Curvas} alt='like' style={{ paddingTop: "555px" }} />
                <h2 id="h2Texto3" style={{ zIndex: 102, marginTop: 555 }}>Te gustaria saber mas sobre nosostros?</h2>
            </div>
            <div id="" style={{ margin: 0 }}></div>
            <img id="subsuelo" src={Picos} alt="like"></img>
            <div style={{ padding: 35, backgroundColor: "#d7d8d6", margin: 0 }}>
                {/* <AliceCarousel mouseTracking items={items} /> */}
                <h1 style={{textAlign:"center", marginBottom:"45px", marginTop:"45px"}}>GENERACIONES 2021 - 2019</h1>
                <div style={{textAlign:"center"}} className="row row-cols-1 row-cols-md-3 g-4">
                    <Gallery> 
                        <Item
                            original={Prueba2}
                            thumbnail={Prueba2}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba2} alt="..." id="bordergeneracion"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba3}
                            thumbnail={Prueba3}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba3} alt="..." id="bordergeneracion" />
                            )}
                        </Item>
                        <Item
                            original={Prueba}
                            thumbnail={Prueba}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba} alt="..." id="bordergeneracion"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba2}
                            thumbnail={Prueba2}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba2} alt="..." id="bordergeneracion"/>
                            )}
                        </Item>
                        <Item
                            original={Prueba3}
                            thumbnail={Prueba3}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Prueba3} alt="..." id="bordergeneracion" />
                            )}
                        </Item>
                        <Item
                            original={Prueba}
                            thumbnail={Prueba}
                            width="724"
                            height="724"
                        >
                            {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={Prueba} alt="..." id="bordergeneracion"/>
                            )}
                        </Item>
                    </Gallery>
                </div>
            </div>
        </div>
    );
};

export default Graduaciones;