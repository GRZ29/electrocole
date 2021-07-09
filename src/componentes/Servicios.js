import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset:120,
    duration:1000
});

const Servicios = () => {
    return (
        <div>
            <section className="page-section" id="services" style={{backgroundColor:"#d7d8d6"}}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contenidos</h2>
                    <h3 className="section-subheading text-muted">Algunos de ellos son</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4" data-aos="fade-right">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-vials fa-stack-1x " style={{color:"#d7d8d6"}}></i>
                        </span>
                        <h4 className="my-3">Salubridad</h4>
                        <p className="text-muted">Identificar los factores de riesgo en un taller ó laboratorio de Electrónica. onocer la relación que se da entre saludtrabajo y medio ambiente.</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x "style={{color:"#d7d8d6"}}></i>
                        </span>
                        <h4 className="my-3">Memoria Logica y Programable</h4>
                        <p className="text-muted">Determinar las características técnicas de los sistemas de almacenamiento de información.Construir sistemas básicos de control con elementos programables.</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-robot fa-stack-1x" style={{color:"#d7d8d6"}}></i>
                        </span>
                        <h4 className="my-3">Diagramas Eléctricos y Electrónicos</h4>
                        <p className="text-muted"> Elaborar diagramas eléctricos y electrónicos de acuerdo a los sistemas DIN y NEMA.</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-ruler-combined fa-stack-1x " style={{color:"#d7d8d6"}}></i>
                        </span>
                        <h4 className="my-3">Practica Empresarial</h4>
                        <p className="text-muted">Reconocer la existencia de reglamentos internos de la empresa.Realizar labores básicas dentro del proceso productivo en la empresa, de acuerdo a su nivel educativo-técnico.</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-hammer fa-stack-1x " style={{color:"#d7d8d6"}}></i>
                        </span>
                        <h4 className="my-3">Herramientas Informáticas para Electrónica</h4>
                        <p className="text-muted">Simular circuitos electrónicos asistidos por computadora.Describir las características y aplicaciones de  Internet</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-pen fa-stack-1x " style={{color:"#d7d8d6"}}></i>
                        </span>
                        <h4 className="my-3">Fundamentos de Dibujo</h4>
                        <p className="text-muted"> Demostrar habilidad y destreza en el uso  adecuado de instrumentos y materiales de Dibujo Técnico. Aplicar el principio de trazos básicos para la conformación de letras verticales</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Servicios;