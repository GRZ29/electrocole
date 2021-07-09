import React from 'react';
import microsoft from './assets/img/logos/microsoft.svg';
import ibm from './assets/img/logos/ibm.svg';
import facebook from './assets/img/logos/facebook.svg';
import google from './assets/img/logos/google.svg';

const Equipo = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={microsoft} alt="..." /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={google} alt="..." /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={facebook} alt="..." /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={ibm} alt="..." /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipo;