import "./Iconos.css"
import documentacion from "../assets/documentacion.jpg";
import capacitaciones from "../assets/capacitaciones.jpg";
import reportes from "../assets/reportes.jpg";
import indicadores from "../assets/indicadores.jpg";
import incidentes from "../assets/incidentes.jpg";
function Iconos(){

    return(


        <div className="botones">


            <button><a href=""/><img src={documentacion}/>Documentación</button>
            <button><a href=""/><img src={capacitaciones}/>Capacitaciones</button>
            <button><a href=""/><img src={reportes}/>Reportes</button>
            <button><a href=""/><img src={indicadores}/>Indicadores</button>
            <button><a href=""/><img src={incidentes}/>Incidentes</button>



        </div>


    )


}

export default Iconos;