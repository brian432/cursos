import { Routes, Route, useParams } from "react-router-dom";
import Header from "./componentes/header";
import Buscador from "./componentes/buscardor";
import Login from "./componentes/login";
import Listado from "./componentes/listado";
import Detalle from "./componentes/detalle";
import Footer from "./componentes/footer";
function App() {

  const params = useParams();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle/:id" element={<Detalle />} /> 
      </Routes>
      <Footer />
    </>


  );
}

export default App;
