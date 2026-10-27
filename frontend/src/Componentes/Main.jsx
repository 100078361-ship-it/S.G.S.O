import { Outlet } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="contenidoprincipal">
      <Outlet />
    </main>
  );
}

export default Main;