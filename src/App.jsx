import { useState } from "react";
import Container from "react-bootstrap/Container";
import BusquedaCol from "./components/Busqueda";
import Registro from "./components/Registro";
import { BaseColaboradores } from "./database/data";
import TableUno from "./components/Table1";
import { Row, Col } from "react-bootstrap";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const filteredColaboradores = colaboradores.filter((colaborador) =>
    Object.values(colaborador).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleUser = (formData) => {
    setColaboradores([...colaboradores, formData]);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <Container className="container mt-5 ">
      <Row className="col-12">
        <BusquedaCol onSearch={handleSearch} />
      </Row>
      <Row className="col-12">
        <TableUno searchTerm={searchTerm} data={filteredColaboradores} />
      </Row>
      <Row className="col-12">
        <Registro
          handleUser={handleUser}
          setFormErrors={setFormErrors}
          formErrors={formErrors}
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
        />
      </Row>
    </Container>
  );
}

export default App;
