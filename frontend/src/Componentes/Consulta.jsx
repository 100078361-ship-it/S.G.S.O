import "./Consulta.css"
import Buscar from "../assets/Consulta.jpg"

function Consulta(){

    return(

        <div className="consulta">
           
           {<img src={Buscar}/>}
            <input type="search" className="busqueda" placeholder=" Buscar" />
            
                
            

        </div>

    )



}

export default Consulta;