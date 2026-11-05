import { Routes, Route } from "react-router-dom";
import Paginas from "./Componentes/Pages/Paginas.jsx";
import Registro from "./Componentes/Pages/Registro.jsx";
import Dashboard from "./Componentes/Pages/Dashboard.jsx";
import Reportes from "./Componentes/Pages/Reportes.jsx";
import Indicadores from "./Componentes/Pages/Indicadores.jsx";
import Incidentes from "./Componentes/Pages/Incidentes.jsx";
import Capacitaciones from "./Componentes/Pages/Capacitaciones.jsx";
import Documentacion from "./Componentes/Pages/Documentacion.jsx";
import Registro2 from "./Componentes/Pages/Registro2.jsx";
import Consultas from "./Componentes/Pages/Consultas.jsx";
import Layout from "./Componentes/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Paginas />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Registro2" element={<Registro2 />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reportes" element={<Reportes />} />
        <Route path="/Indicadores" element={<Indicadores />} />
        <Route path="/Incidentes" element={<Incidentes />} />
        <Route path="/Capacitaciones" element={<Capacitaciones />} />
        <Route path="/Documentacion" element={<Documentacion />} />
        <Route path="/Consultas" element={<Consultas />} />
        
      </Route>
    </Routes>
  );
}

export default App;
