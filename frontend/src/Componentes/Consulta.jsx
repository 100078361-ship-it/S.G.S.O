import "./Consulta.css"
import Buscar from "../assets/Consulta.jpg"
import Empresas from "./Empresas";

const registros = [
  {
    id: 1,
    nombre: "Juan Pérez",
    tipoEvento: "Accidente",
    gravedad: "Moderado",
    tipoAccidente: "Caída",
    causaInmediata: "Piso mojado",
    causaBasica: "Falta de mantenimiento",
    condicionInsegura: "Superficie resbaladiza",
    actoInseguro: "Caminar con prisa",
    empresa: "CEDI Sto. Dgo",
    departamento: "Picking",
    cantinvolucrados: "2",
    tipodelesion: "Rotura",
    parteafectada: "Pie izquierdo",
    diasdeincapacidad: "15",
    daniosmateriales: "N/A",
    costoestimados: "1202",
    descipcion: "Resbalo por las escaleras"
  },
  {
    id: 2,
     nombre: "Juan Pérez",
    tipoEvento: "Accidente",
    gravedad: "Moderado",
    tipoAccidente: "Caída",
    causaInmediata: "Piso mojado",
    causaBasica: "Falta de mantenimiento",
    condicionInsegura: "Superficie resbaladiza",
    actoInseguro: "Caminar con prisa",
    empresa: "CEDI Sto. Dgo",
    departamento: "Picking",
    cantinvolucrados: "2",
    tipodelesion: "Rotura",
    parteafectada: "Pie izquierdo",
    diasdeincapacidad: "15",
    daniosmateriales: "N/A",
    costoestimados: "1202",
    descipcion: "Resbalo por las escaleras"
  },
  {
    id: 3,
   nombre: "Juan Pérez",
    tipoEvento: "Accidente",
    gravedad: "Moderado",
    tipoAccidente: "Caída",
    causaInmediata: "Piso mojado",
    causaBasica: "Falta de mantenimiento",
    condicionInsegura: "Superficie resbaladiza",
    actoInseguro: "Caminar con prisa",
    empresa: "CEDI Sto. Dgo",
    departamento: "Picking",
    cantinvolucrados: "2",
    tipodelesion: "Rotura",
    parteafectada: "Pie izquierdo",
    diasdeincapacidad: "15",
    daniosmateriales: "N/A",
    costoestimados: "1202",
    descipcion: "Resbalo por las escaleras"
  },
];

function Consulta(){

    return(

       <div>

<div className="cabeceraconsulta">

    <h1 className="h1cunsulta">Consulta</h1>

<div>
         

      </div>
      
       <div>
        
        <label>Desde</label>
         <input type="date" className="desde" />
         <label>Hasta</label>
        <input type="date" className="hasta" />
        
       </div>
<Empresas/>
</div>


<div className="busqueda">

 <div className="consulta">
           
           {<img src={Buscar}/>}
            <input type="search" className="busqueda" placeholder=" Buscar" />
            
            
        </div>


        <div>

            <button className="butt">Buscar</button>

        </div>


</div>

        <h2>Detalle</h2>


        <div className="detalle">

       <div className="tabla-contenedor">
      <table className="tabla-registros">
        <thead>
          <tr>
            <th>Nombre y apellido</th>
            <th>Tipo de evento</th>
            <th>Gravedad</th>
            <th>Clasificación del evento</th>
            <th>Tipo de hallazgo identificado</th>
            <th>Causa raíz</th>
            <th>Acción correctiva</th>
            <th>Descripción</th>
            <th>Empresa</th>
            <th>Departamento</th>
            <th>Cant. Involucrados</th>
            <th>Tipo de lesión</th>
            <th>Parte afectada</th>
            <th>Días incapacidad</th>
            <th>Daños materiales</th>
            <th>Costo estimado</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r) => (
            <tr key={r.id}>
              <td>{r.nombre}</td>
              <td>{r.tipoEvento}</td>
              <td>{r.gravedad}</td>
              <td>{r.tipoAccidente}</td>
              <td>{r.causaInmediata}</td>
              <td>{r.causaBasica}</td>
              <td>{r.condicionInsegura}</td>
              <td>{r.descipcion}</td>
              <td>{r.empresa}</td>
              <td>{r.departamento}</td>
              <td>{r.cantinvolucrados}</td>
              <td>{r.tipodelesion}</td>
              <td>{r.parteafectada}</td>
              <td>{r.diasdeincapacidad}</td>
              <td>{r.daniosmateriales}</td>
              <td>{r.costoestimados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


        </div>
       </div>
        
    )



}

export default Consulta;