import React from 'react';

const Acerca = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d7d8d6" fillOpacity="1" d="M0,32L288,256L576,32L864,224L1152,256L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
            </svg>
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nivel de aprendizaje de Electrónica Industrial</h2>
                    <br/><br/>
                </div>
                <ul className="timeline">
                    <li>
                 v         <div className="timeline-image"style={{}}><h4>Cuarto <br/>año</h4></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Programa de Décimo</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">1.Tecnologías de información 
aplicadas a Electrónica Industrial<br/> 2.Instalaciones eléctricas<br/> 3.Fundamentos de Electrónica <br/>4.English Oriented to Industrial 
Electronics</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><h4>Quinto <br/>año</h4></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Programa de Undécimo</h4>
                            </div>
                            <div className="timeline-body">1.Electrónica Analógica <br/>2.Automatismo Industrial <br/>3.Electrónica Digital <br/>4.Emprendimiento e innovación 
aplicada a la Electrónica Industrial<br/> 5.English Oriented to Industrial 
Electronics<p className="text-muted"></p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><h4>Sexto <br/>año</h4></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Programa de Duodécimo</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">1.Electrónica Digital
 <br/>2.Control Industrial <br/>3.English Oriented to Industrial 
Electronics</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><h4>Que <br/>Aprendimos?</h4></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Conocimientos</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">El saber es poder y gracias a los cursos que ofrecemos en nuestro programa de Electrónica Industrial vas a poder competir en las nuevas y tecnologicas ofertas de trabajo como un gran candidato a ser elegido</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Se parte
                                <br />
                                de
                                <br />
                                nosotros!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </div>
    );
};

export default Acerca;
