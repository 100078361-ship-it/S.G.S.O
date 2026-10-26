import Header from "../Header.jsx";
import Aside from "../Aside";
import Footer from "../Footer.jsx";
import Targetas from "../Targetas.jsx";
import Targeta2 from "../Targeta2.jsx";
import Iconos from "../Iconos.jsx";


function Principal() {
  return (
    <div className="app">
      <Header />
      <Aside />
      <Footer />
      <Targetas />
      <Targeta2 />
      <Iconos />
    </div>
  );
}

export default Principal;