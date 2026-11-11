import "./Header.css";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import tiktok from "../assets/tiktok.jpg";
import WhatsApp from "../assets/whatsApp.jpg";




function Footer(){

    return(

        <footer>
           
            <label> <img src={facebook}/><a href="">Gicasoft</a></label>
            <label><img src={instagram}/><a href="">Gicasoft </a></label>
            <label><img src={WhatsApp}/><a href="">809-315-8404 </a></label>
            <label><img src={tiktok}/><a href="">Gicasoft </a></label>
            <label>© 2026 GicaSoft Todos los derechos reservados</label>
        </footer>


    )




};

export default Footer;