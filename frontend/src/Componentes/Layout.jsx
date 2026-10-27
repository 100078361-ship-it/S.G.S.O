import Header from "./Header.jsx";
import Aside from "./Aside";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";

function Layout() {
  return (
    <div className="app">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;