import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const datosAnillo = [
  { estado: "Cerrados", cantidad: 45 },
  { estado: "En proceso", cantidad: 30 },
  { estado: "Pendientes", cantidad: 25 },
];
const coloresAnillo = ["#2E7D32", "#F9A825", "#C62828"];


import "./Anillo.css"
function Anillo(){

return(
 <div className="graficos1">
    
<div className="resumen">
    
<label htmlFor="">Consultados <p>0</p></label>
<label htmlFor="">Iniciados <p>0</p></label>
<label htmlFor="">En proceso <p>0</p></label>
<label htmlFor="">Cerrados <p>0</p></label>
</div>

    <div className="pastel">
      
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



}





export default Anillo;