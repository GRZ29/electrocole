import React from 'react';
import por1 from './assets/img/portfolio/semiconductores.jpg';
import por2 from './assets/img/portfolio/programacion.jpg';
import por3 from './assets/img/portfolio/power.jpg';
import por4 from './assets/img/portfolio/router.jpg';
import por5 from './assets/img/portfolio/mecatronica.jpg';
import por6 from './assets/img/portfolio/administracion_mantenimiento.jpg';

const Portfolio = () => {
    return (
        <div >
            {/* <div id="circulo1"/> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d7d8d6" fillOpacity="1" d="M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,101.3C672,96,768,160,864,197.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portafolio</h2>
                    <br/><br/>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-in">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={por1} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Semiconductores</div>
                                <div className="portfolio-caption-subheading text-muted">Curso de Décimo</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-in">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={por2} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Programación multiparadigma para dispositivos electrónicos IIOT</div>
                                <div className="portfolio-caption-subheading text-muted">Curso de Décimo</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-in">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={por3} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Fuentes de alimentación</div>
                                <div className="portfolio-caption-subheading text-muted">Curso de Undécimo</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-in">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={por4} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Enrutamiento y conmutación de Redes</div>
                                <div className="portfolio-caption-subheading text-muted">Curso de Undécimo</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0" data-aos="fade-in">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={por5} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Mecatrónica</div>
                                <div className="portfolio-caption-subheading text-muted">Curso de Duodécimo</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" data-aos="fade-in">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={por6} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Administración del Mantenimiento</div>
                                <div className="portfolio-caption-subheading text-muted">Curso de Duodécimo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Portfolio;