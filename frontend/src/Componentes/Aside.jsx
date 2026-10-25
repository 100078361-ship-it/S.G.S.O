import home from "../assets/Home.jpg";
import entrar from "../assets/Entrar.jpg";
import salir from "../assets/Salir.jpg";
import guardar from "../assets/Guardar.jpg";
import buscar from "../assets/Consulta.jpg";
import dashboard from "../assets/dahsboard.jpg";
import atras from "../assets/atras.jpg";
import "./Header.css";


function Aside(){

return( 

<aside>

        
<div>
  <label>Menu de opciones</label>
    <ul>

      <li><a href=""><button className="home"><img src={home}/>Inicio<img src={entrar}/></button></a></li>
      <li><a href=""><button><img src={guardar}/>Registro<img src={entrar}/></button></a></li>
      <li><a href=""><button><img src={buscar}/>Consulta<img src={entrar}/></button></a></li>
      <li><a href=""><button><img src={dashboard}/>Dashboard<img src={entrar}/></button></a></li>
      <li><a href=""><button><img src={atras}/>Salir<img src={salir}/></button></a></li>

</ul>
</div>
      
        


    </aside>
    

)

};

  export default Aside;