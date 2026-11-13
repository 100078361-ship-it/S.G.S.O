
import { Link } from "react-router-dom";
import Guardar from "../assets/Guardar.jpg";
import Iconos from "./Iconos.jsx";
import "./Formulario.css";


function Formulario(){

return(

<div className="formulario">

<div className="registroaccidentes">

<img src={Guardar} title="Guardar" />

<p>Registro de accidentes e incidentes</p>

</div>

<form>

<div className="registro1">


    <div className="seccion1">
<label>  Nombre y apellido</label>
<input type="text" placeholder="Campo obligatorio" />


<label>Tipo de evento</label>
<select name="" id="">
<option>Seleciona un tipo de evento</option>
<option>Accidente</option>
<option>Incidente</option>
<option>Primeros auxilios</option>
<option>Accidente de tránsito</option>
</select>


<label>Gravedad</label>
<select name="" id="">
<option>Seleciona la gravedad del evento</option>
<option>Leve</option>
<option>Moderado</option>
<option>Grave</option>
<option>Fatal</option>
</select>


<label>Clasificación del evento</label>


<select name="" id="">
    <option>Seleciona el tipo de accidente</option>
<option>Golpes contra objetos</option>
<option>Golpes por objetos</option>
<option>Caídas al mismo nivel</option>
<option>Caídas a diferente nivel</option>
<option>Cortes y heridas</option>
<option>Sobreesfuerzos</option>
<option>Contacto con sustancias químicas</option>
<option>Quemaduras</option>
<option>Exposición a agentes físicos</option>
<option>Atrapamientos</option>
</select>

<label>Tipo de hallazgo identificado</label>
<select>
    <option>Elije un tipo de hallazgo</option>
<option>Acto inseguro</option>
<option>Condición insegura</option>
</select>

    </div>

<div className="seccion2">

<label>Causa raíz</label>
<input type="text" />
<label>Acción correctiva</label>
<input type="text" />



<label>Descripción</label>
<textarea className="descripcion"/>

</div>
</div>


<div className="enviarylimpiar">
<button type="reset">Limpiar</button>
<Link to="/Registro2" ><button>Siguiente</button></Link>
</div>
</form>


</div>



);



}

export default Formulario;