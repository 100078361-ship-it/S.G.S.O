import logo from "../assets/Logo escudo de club de futbol deportivo profesional azul.png";
import "./Header.css";
import usuario from  "../assets/Usuario.JPG";




function Header(){

    return(
<header>
        
        
        <div className="h22">
 <img src={logo} className="logo"/>
          
          <h1>
            S.G.S.O 
            <br/><b className="nombre"> Sistema de gestión de seguridad <br/>y salud ocupacional</b> 
           </h1>
        </div>

 <div className="usuario">
           <a href=""> <button id="confusuario"> <img src={usuario} />Usuario <img src="https://images.icon-icons.com/2761/PNG/96/settings_icon_176440.png"/> </button></a>
            
          </div>


        <div className="cntmenu">
          <ul className="menu">
        <li>
        <a href=""> Salir</a>
      </li>
      <li className="active">
        <a href="">Servicios</a>
      </li>
      <li className="active">
        <a href="">Consulta</a>
      </li>
      </ul>
          </div>   
        

         </header> 

    );



  }
         export default Header;