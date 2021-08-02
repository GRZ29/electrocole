import React from 'react';
import Prueba from './assets/img/instalaciones/IMG_20190614_104228.jpg';
import Prueba2 from './assets/img/instalaciones/IMG_20190614_105918.jpg';
import Prueba3 from './assets/img/instalaciones/IMG_20191128_160613.jpg';

import Prueba4 from './assets/img/instalaciones/IMG_20191128_160616.jpg';
import Prueba5 from './assets/img/instalaciones/IMG_20191129_130208.jpg';
import Prueba6 from './assets/img/instalaciones/WhatsApp Image 2020-03-10 at 8.53.21 AM (1).jpeg';

import Prueba7 from './assets/img/instalaciones/WhatsApp Image 2020-03-10 at 8.53.21 AM (4).jpeg';
import Prueba8 from './assets/img/instalaciones/WhatsApp Image 2020-03-10 at 8.53.21 AM.jpeg';
import Prueba9 from './assets/img/instalaciones/WhatsApp Image 2020-03-10 at 8.55.25 AM (2).jpeg';
import Carousel from 'react-bootstrap/Carousel'
import './css/videosStyle.css';

const displayImagenes = () => {
  return (
    <div className="container">
      <h2 style={{textAlign:"center"}}>NUESTRAS AREAS</h2><br/><br/>
     <div className="row row-cols-1 row-cols-md-3 g-4" style={{height:"100%"}}>
       <div className="col" data-aos="flip-up"> 
        <Carousel fade  id="columna">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba}
              alt="First slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col" data-aos="flip-up" style={{height:"55px"}}>
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba4}
              alt="First slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba5}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba6}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div  className="col" data-aos="flip-up">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba7}
              alt="First slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba8}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba9}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div> 
    </div>
  );
};

export default displayImagenes;