import { useState } from "react";
import Container from "react-bootstrap/Container";
import TableUno from "./components/Table1";
import BusquedaCol from "./components/Busqueda";
import Registro from "./components/Registro";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formErrors, setFormErrors] = useState("");

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
      <TableUno searchTerm={searchTerm} />
      <Registro
        handleUser={handleUser}
        setFormErrors={setFormErrors}
        formErrors={formErrors}
      />
    </Container>
  );
}

export default App;
