import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const datosPastel = [
  { nombre: "Accidentes", valor: 400 },
  { nombre: "Incidentes", valor: 300 },
  { nombre: "Incapacitantes", valor: 200 },
  { nombre: "Primeros", valor: 278 },
];
const coloresPastel = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const datosBarras = [
  { mes: "Ene", accidentes: 12, incidentes: 20 },
  { mes: "Feb", accidentes: 8, incidentes: 15 },
  { mes: "Mar", accidentes: 15, incidentes: 18 },
  { mes: "Abr", accidentes: 6, incidentes: 10 },
  { mes: "May", accidentes: 9, incidentes: 14 },
];

const datosAnillo = [
  { estado: "Cerrados", cantidad: 45 },
  { estado: "En proceso", cantidad: 30 },
  { estado: "Pendientes", cantidad: 25 },
];
const coloresAnillo = ["#2E7D32", "#F9A825", "#C62828"];


import "../Componentes/Graficos.css";


function Graficos() {

    return (
      <div className="graficos1">


    <div className="pastel">
      <div>
        <ResponsiveContainer width="90%" height="90%">
          <PieChart>
            <Pie
              data={datosPastel}
              dataKey="valor"
              nameKey="nombre"
              outerRadius={110}
              label
            >
              {datosPastel.map((item, i) => (
                <Cell key={item.nombre} fill={coloresPastel[i % coloresPastel.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="barra">
        <ResponsiveContainer width="80%" height="90%">
          <BarChart data={datosBarras}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="accidentes" fill="#FF8042" />
            <Bar dataKey="incidentes" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="anillo">
        <ResponsiveContainer width="80%" height="90%">
          <PieChart>
            <Pie
              data={datosAnillo}
              dataKey="cantidad"
              nameKey="estado"
              innerRadius={65}
              outerRadius={110}
              paddingAngle={3}
              label
            >
              {datosAnillo.map((item, i) => (
                <Cell key={item.estado} fill={coloresAnillo[i % coloresAnillo.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
      </div>
    )

};


export default Graficos;