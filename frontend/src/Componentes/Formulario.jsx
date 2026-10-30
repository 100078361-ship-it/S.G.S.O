
import Guardar from "../assets/Guardar.jpg";
import "./Formulario.css";



function Formulario(){

return(

<div className="formulario">

<div className="registroaccidentes">

<img src={Guardar} alt="" />

<p>Registro de accidentes e incidentes</p>


</div>

<form>

<label> Nombre y apellido</label>
<input type="text" />


<label>Tipo de evento</label>
<select name="" id="">
<option></option>
<option>Accidente</option>
<option>Incidente</option>
</select>


<label>Gravedad</label>
<select name="" id="">
<option></option>
<option>Leve</option>
<option>Moderado</option>
<option>Grave</option>
<option>Fatal</option>
</select>


<label>Tipo de accidente</label>


<select name="" id="">
    <option></option>
<option>Caida</option>
<option>Golpe</option>
<option>Corte</option>
<option>Quemadura</option>
<option>Atrapamiento</option>
<option>Exploción</option>
</select>
<label>Causa inmediata</label>
<input type="text" />

<label>Causa básica</label>
<input type="text" />

<label>Condiciones inseguras</label>
<input type="text" />

<label>Acto inseguro</label>
<input type="text" />



</form>

</div>






);



}

export default Formulario;