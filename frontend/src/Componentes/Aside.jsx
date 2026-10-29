import home from "../assets/Home.jpg";
import entrar from "../assets/Entrar.jpg";
import salir from "../assets/Salir.jpg";
import guardar from "../assets/Guardar.jpg";
import buscar from "../assets/Consulta.jpg";
import dashboard from "../assets/dahsboard.jpg";
import atras from "../assets/atras.jpg";
import "./Header.css";
import { Link } from "react-router-dom";


function Aside(){

return( 

<aside>

        
<div>
  <label>Menú</label>
    <ul>

      <li><Link to= "/"><button className="home"><img src={home}/>Inicio<img src={entrar}/></button></Link></li>
      <li><Link to= "/Registro"><button><img src={guardar}/>Registro<img src={entrar}/></button></Link></li>
      <li><Link to="/Consulta"><button><img src={buscar}/>Consulta<img src={entrar}/></button></Link></li>
      <li><Link to="/Dashboard"><button><img src={dashboard}/>Dashboard<img src={entrar}/></button></Link></li>
      <li><button onClick={() => window.history.back()}><img src={atras}/>Atrás<img src={salir}/></button></li>

</ul>
</div>
      
        


    </aside>
    

)

};

  export default Aside;