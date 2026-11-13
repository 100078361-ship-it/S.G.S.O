
import accidentes from "../../assets/Accidentes.png";
import incidentes from "../../assets/incidentes.jpg";
import reportes from "../../assets/reportes.jpg";
import capacitaciones from "../../assets/capacitaciones.jpg";
import pendientes from "../../assets/en espera.jpg";
import cerrado from "../../assets/hecho.jpg";
import incapacidad from "../../assets/incapacidad.png";
import diasperdidos from "../../assets/dias perdidos.jpg";
import primerosauxilios from "../../assets/primeros auxilios.png";
import indice from "../../assets/indice.png";
import ISE from "../../assets/severidad.jpg";
import  Graficos from "../Graficos.jsx"; 
import "../Dashboard.css";
import Empresas from "../Empresas.jsx"



function Dashboard(){


   return(

 <>
<div className="principal">

   <div className="targetas">

        <p className="subtitulos"><br/>
        <p className="sistem">DASHBOARD</p>
         </p>

         <div>

         

         </div>
 <div className="rangofecha">
        <label>Desde</label>
         <input type="date" className="desde" />
         <label>Hasta</label>
        <input type="date" className="hasta" />

        <button>Filtrar</button>
       </div>
<Empresas/>
    </div>

</div>

<div className="Dasboard">

<label>

<img src={accidentes} alt="Accidentes" className="img"/>
<p className="titulo">Accidentes</p>
<p className="numero">25</p>

</label>

<label>
<img src={incidentes} alt="Accidentes" className="img"/>
<p className="titulo">Incidentes</p>
<p className="numero">20</p>
</label>



<label>
<img src={pendientes} alt="Pendientes" className="img"/>
<p className="titulo">Pendientes</p>
<p className="numero">15</p>
</label>

<label>
<img src={cerrado} alt="Cerrado" className="img"/>
<p className="titulo">Cerrados</p>
<p className="numero">5</p>
</label>

<label>
<img src={incapacidad} alt="Incapacidades" className="img"/>
<p className="titulo">Incapacitantes</p>
<p className="numero">51</p>
</label>

<label>
<img src={diasperdidos} alt="Días perdidos" className="img"/>
<p className="titulo">Días perdidos</p>
<p className="numero">58</p>
</label>
<label>
<img src={primerosauxilios} alt="Primeros auxilios" className="img"/>
<p className="titulo">Primeros auxilios</p>
<p className="numero">50</p>
</label>

<label>
<img src={indice} alt="IF" className="img"/>
<p className="titulo">IF</p>
<p className="numero">85</p>
</label>

<label>
<img src={indice} alt="Cerrado" className="img"/>
<p className="titulo">IF anterior</p>
<p className="numero">25</p>
</label>

<label>
<img src={ISE} alt="ISE" className="img"/>
<p className="titulo">ISE</p>
<p className="numero">35</p>
</label>


  
   
</div>

  <div>
<Graficos/>
</div> 
</>
   )


};

export default Dashboard;