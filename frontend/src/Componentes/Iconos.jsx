import "./Iconos.css"
import documentacion from "../assets/documentacion.jpg";
import capacitaciones from "../assets/capacitaciones.jpg";
import reportes from "../assets/reportes.jpg";
import indicadores from "../assets/indicadores.jpg";
import incidentes from "../assets/incidentes.jpg";
import { Link } from "react-router-dom";
function Iconos(){

    return(


        <div className="botones">


            <Link to="/Documentacion"><button><img src={documentacion}/>Documentación</button></Link>
            <Link to="/Reportes"><button><a href=""/><img src={reportes}/>Reportes</button></Link>
            <Link to="/Indicadores"><button><a href=""/><img src={indicadores}/>Indicadores</button></Link>
            <Link to="/Reportes"><button><a href=""/><img src={incidentes}/>Incidentes</button></Link>
            <Link to="/Capacitaciones"><button><a href=""/><img src={capacitaciones}/>Capacitaciones</button></Link>


        </div>


    )


}

export default Iconos;