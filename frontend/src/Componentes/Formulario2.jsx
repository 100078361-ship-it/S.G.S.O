import "./Formulario.css"


import { Link } from "react-router-dom";
import Guardar from "../assets/Guardar.jpg";
import "./Formulario.css";




function Formulario2(){

return(

<div className="formulario">

<div className="registroaccidentes">

<img src={Guardar} title="Guardar" />

<p>Registro de accidentes e incidentes</p>

</div>

<form>

<div className="seccion1">

    <label> Empresa</label>
<select name="" id="">
<option></option>
<option>CEDI Santo Domingo</option>
<option>Pelco</option>
<option>Laboratorio</option>
<option>CEDI Santiago</option>
<option>Arroyo Hondo</option>
</select>


<label>Departamento</label>
<select name="" id="">
<option></option>
<option>Despacho</option>
<option>Picking</option>
<option>Recepcion</option>
<option>Oficina</option>
</select>


<label>Lesiones</label>
<input type="text" />

<label>Tipo de lesion </label>
<input type="text" />
</div>

<div className="seccion2">

    <label>Parte afectada</label>
<input type="text" />

<label>Dias de dispacacidad</label>
<input type="number" />

<label>Danios materiales</label>
<input type="text" />

<label>Costo estimado</label>
<input type="text" />
</div>

<div className="enviarylimpiar">
<button type="reset">Limpiar</button>
<Link to="/Registro2" ><button>Guardar</button></Link>

</div>
</form>


</div>



);



}

export default Formulario2;
