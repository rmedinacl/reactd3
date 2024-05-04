import { useState } from "react";
import Container from "react-bootstrap/Container";
import TableUno from "./components/Table1";
import BusquedaCol from "./components/Busqueda";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <Container fluid="md">
      <BusquedaCol onSearch={handleSearch} />
      <TableUno searchTerm={searchTerm} />
    </Container>
  );
}

export default App;
