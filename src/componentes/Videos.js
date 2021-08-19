import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import monta from './assets/img/videos/layered-peaks.svg';
import './css/videosStyle.css';
import PrimerCambio from './assets/img/videos/rojoclaro-ablanco.svg'



AOS.init({
    offset:120,
    duration:1000
});

const Videos = () => {
    return (
        <div >
			<div id="estre" style={{height:"970px", margin:"0px",padding:"0px",boxSizing:'border-box'}}>
				<h2 id="h2Texto" data-text="sobresaliente" style={{paddingTop:"350px",zIndex:101}}>sobresaliente</h2>
				<h2  id="h2Texto2" style={{zIndex:102}}>es una palabra que nos define correctamente</h2>
				<img id="monta" src={monta}  alt='like'/>
				<h2  id="h2Texto3" style={{zIndex:102, marginTop:555}}>Te gustaria saber mas sobre nosostros?</h2>
			</div>
			<div id="estrellas" style={{margin:0}}></div>
			<img id="subsuelo" src={PrimerCambio} alt="like"></img>
			<div  style={{padding:35, backgroundColor:"#d7d8d6",margin:0}}>
				<h2 style={{textAlign:"center"}}>CONOCE SOBRE NUESTROS AREAS Y ESTUDIANTES</h2>
				<br/><br/><br/>
				<div className="row row-cols-1 row-cols-md-2 g-4">
				<div className="col" data-aos="fade-in">
					<div className="card">
					<iframe className="card-img-top" width="560" height="515" src="https://www.youtube.com/embed/ILNWBx6gSLA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<div className="card-body">
						<h5 className="card-title">Electrónica Industrial Vocacional Monseñor Sanabria</h5>
					</div>
					</div>
				</div>
				<div className="col" data-aos="fade-in">
					<div className="card">
						<iframe className="card-img-top" width="560" height="515" src="https://www.youtube.com/embed/prE6yrDYjic" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<div className="card-body">
						<h5 className="card-title">Electrónica Industrial Vocacional Monseñor Sanabria</h5>
					</div>
					</div>
				</div>
				<div className="col" data-aos="fade-in"> 
					<div className="card">
					<iframe className="card-img-top"  width="560" height="515" src="https://www.youtube.com/embed/0IyXsesLh_k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<div className="card-body">
						<h5 className="card-title">Electrónica Industrial Vocacional Monseñor Sanabria</h5>
					</div>
					</div>
				</div>
				<div className="col" data-aos="fade-in">
					<div className="card">
					<iframe className="card-img-top"  width="560" height="515" src="https://www.youtube.com/embed/c8cn90vIrPQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<div className="card-body">
						<h5 className="card-title">Electrónica Industrial Vocacional Monseñor Sanabria</h5>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
    );
};

export default Videos;