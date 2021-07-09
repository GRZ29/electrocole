import React from 'react';
import por1 from './assets/img/portfolio/semiconductores.jpg';
import por2 from './assets/img/portfolio/programacion.jpg';
import por3 from './assets/img/portfolio/power.jpg';
import por4 from './assets/img/portfolio/router.jpg';
import por5 from './assets/img/portfolio/mecatronica.jpg';
import por6 from './assets/img/portfolio/administracion_mantenimiento.jpg';
import iclose from './assets/img/close-icon.svg';

const Poppup = () => {
    return (
        <div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={iclose} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Resultados del aprendizaje</h2>
                                    <br/><br/>
                                    <img className="img-fluid d-block mx-auto" src={por1} alt="..." />
                                    <p>Determina el funcionamiento de diodos 
                                    semiconductores en equipos electrónicos, 
                                    haciendo uso de sintomatología, 
                                    documentación técnica y protocolos para la 
                                    detección y corrección de fallas según la 
                                    normativa y características técnicas 
                                    vigentes</p>

                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={iclose} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Programación multiparadigma para dispositivos electrónicos IIOT</h2>
                                    <br/><br/>
                                    <img className="img-fluid d-block mx-auto" src={por2} alt="..." />
                                    <p>Utilizar la sintaxis del lenguaje de 
                                    programación orientada a objetos, para el 
                                    diseño de programas sencillos, dispositivos 
                                    en las áreas de ciberseguridad, redes e 
                                    IIOT</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={iclose} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Fuentes de alimentación</h2>
                                    <br/><br/>
                                    <img className="img-fluid d-block mx-auto" src={por3} alt="..." />
                                    <p>Aplicar procedimientos de mantenimiento 
                                    preventivo, correctivo y predictivo en forma segura 
                                    en sistemas de alimentación ininterrumpida (SAI, 
                                    UPS) e inversores</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={iclose} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Enrutamiento y conmutación de Redes</h2>
                                    <br/><br/>
                                    <img className="img-fluid d-block mx-auto" src={por4} alt="..." />
                                    <p>Implementar DHCPv4 y DHCPv6 para 
                                    operar a través de múltiples redes de área local 
                                    en una red de pequeñas y medianas empresas.</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={iclose} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Mecatrónica</h2>
                                    <br/><br/>
                                    <img className="img-fluid d-block mx-auto" src={por5} alt="..." />
                                    <p>Demostrar las características de los 
                                    diferentes sistemas mando y trabajo con los 
                                    métodos de diseño de Circuitos neumáticos y o 
                                    empleando programas de simulación 
                                    especializados.</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={iclose} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Administración del Mantenimiento</h2>
                                    <br/><br/>
                                    <img className="img-fluid d-block mx-auto" src={por6} alt="..." />
                                    <p>Ejecuta los procesos de 
                                    mantenimiento de forma responsable y 
                                    autónoma con base a una planificación 
                                    previa</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Poppup;