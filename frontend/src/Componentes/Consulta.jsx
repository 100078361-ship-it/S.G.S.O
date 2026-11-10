import "./Consulta.css"
import Buscar from "../assets/Consulta.jpg"
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
  },
  {
    id: 2,
    nombre: "María Gómez",
    tipoEvento: "Incidente",
    gravedad: "Leve",
    tipoAccidente: "Golpe",
    causaInmediata: "Objeto en el pasillo",
    causaBasica: "Falta de orden y limpieza",
    condicionInsegura: "Pasillo obstruido",
    actoInseguro: "Dejar material en el paso",
  },
  {
    id: 3,
    nombre: "Carlos Ramírez",
    tipoEvento: "Accidente",
    gravedad: "Grave",
    tipoAccidente: "Corte",
    causaInmediata: "Herramienta sin protección",
    causaBasica: "Falta de capacitación",
    condicionInsegura: "Equipo sin guarda",
    actoInseguro: "No usar guantes",
  },
];

function Consulta(){

    return(

       <div>

<div className="cabeceraconsulta">

    <h1 className="h1cunsulta">Consulta</h1>

       <div>
        <label>Desde</label>
         <input type="date" className="desde" />
         <label>Hasta</label>
        <input type="date" className="hasta" />
       </div>

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
            <th>Tipo de accidente</th>
            <th>Causa inmediata</th>
            <th>Causa básica</th>
            <th>Condiciones inseguras</th>
            <th>Acto inseguro</th>
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
              <td>{r.actoInseguro}</td>
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