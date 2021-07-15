import React from 'react';
import team1 from './assets/img/team/Jose Antonio Arce.png';
import team2 from './assets/img/team/Danilo Rojas Chanto (1) (1).png';

const Team = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d7d8d6" fillOpacity="1" d="M0,224L0,320L65.5,320L65.5,96L130.9,96L130.9,256L196.4,256L196.4,192L261.8,192L261.8,256L327.3,256L327.3,96L392.7,96L392.7,160L458.2,160L458.2,64L523.6,64L523.6,160L589.1,160L589.1,192L654.5,192L654.5,160L720,160L720,192L785.5,192L785.5,128L850.9,128L850.9,224L916.4,224L916.4,64L981.8,64L981.8,192L1047.3,192L1047.3,160L1112.7,160L1112.7,64L1178.2,64L1178.2,320L1243.6,320L1243.6,32L1309.1,32L1309.1,64L1374.5,64L1374.5,96L1440,96L1440,0L1374.5,0L1374.5,0L1309.1,0L1309.1,0L1243.6,0L1243.6,0L1178.2,0L1178.2,0L1112.7,0L1112.7,0L1047.3,0L1047.3,0L981.8,0L981.8,0L916.4,0L916.4,0L850.9,0L850.9,0L785.5,0L785.5,0L720,0L720,0L654.5,0L654.5,0L589.1,0L589.1,0L523.6,0L523.6,0L458.2,0L458.2,0L392.7,0L392.7,0L327.3,0L327.3,0L261.8,0L261.8,0L196.4,0L196.4,0L130.9,0L130.9,0L65.5,0L65.5,0L0,0L0,0Z"></path>
            </svg><section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Conoce a unos nuestros profesores</h2>
                    <h3 className="section-subheading text-muted"> <br/></h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team1} alt="..."style={{width:"300px", height:"300px"}} />
                            <h4>José Antonio Arce Flores</h4>
                            <p className="text-muted">Profesor de Electrónica Industrial</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/jaarcef"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
<br/><br/>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team2} alt="..." style={{width:"300px", height:"300px"}}/>
                            <h4>Danilo Rojas Chanto</h4>
                            <p className="text-muted">Profesor de Electrónica Industrial</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/rojaschanto"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Team;