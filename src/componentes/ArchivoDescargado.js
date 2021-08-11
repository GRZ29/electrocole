import React from 'react';
import pdf from './PDF/PdfElectronica.pdf'

const ArchivoDescargado = () => {

   
    return (
        <div  id="divdescarga" style={{height:350,textAlign:"center"}}>
            <br/><br/>
                <h2>QUIERES INFORMARTE MAS? TE DEJAMOS NUESTRO PROGRAMA DE ESTUDIO   </h2>
            <br/><br/><br/><br/><br/>
                <a style={{fontSize:40}} id="link_descargas"  href={pdf} download="Programa_Electronica_Industrial.pdf">Descargar</a>
        </div>
    );
};

export default ArchivoDescargado;