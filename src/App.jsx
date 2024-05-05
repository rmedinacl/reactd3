import { useState } from "react";
import Container from "react-bootstrap/Container";
import { TableUsers } from "./components/Tabla2";
import BusquedaCol from "./components/Busqueda";
import Registro from "./components/Registro";
import { BaseColaboradores } from "./database/data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [enviarFormulario, setEnviarFormulario] = useState("");

  const handleUser = (formData) => {
    // Lógica para manejar los datos del formulario
    console.log(formData);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <Container fluid="md">
      <BusquedaCol onSearch={handleSearch} />
      <TableUsers
        searchTerm={searchTerm}
        data={BaseColaboradores}
        onChange={enviarFormulario}
      />
      {/* <TableUno searchTerm={searchTerm} data={BaseColaboradores} /> */}
      <Registro
        handleUser={handleUser}
        setFormErrors={setFormErrors}
        formErrors={formErrors}
      />
    </Container>
  );
}

export default App;
