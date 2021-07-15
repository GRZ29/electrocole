import React from 'react';
import Prueba from './assets/img/team/1.jpg';
import Prueba2 from './assets/img/team/2.jpg';
import Prueba3 from './assets/img/team/3.jpg';
import Carousel from 'react-bootstrap/Carousel'
import './css/videosStyle.css';

const displayImagenes = () => {
  return (
    <div className="container">
      <h2 style={{textAlign:"center"}}>PROYECTOS DE NUESTRAS GENERACIONES</h2><br/><br/>
     <div className="row row-cols-1 row-cols-md-3 g-4">
       <div className="col"> 
        <Carousel fade  id="columna">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Décimo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Décimo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Décimo</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Undécimo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Undécimo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Undécimo</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div  className="col">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Duodécimo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Duodécimo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Prueba3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Duodécimo</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div> 
    </div>
  );
};

export default displayImagenes;