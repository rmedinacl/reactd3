import Table from "react-bootstrap/Table";

function TableUno({ data, searchTerm }) {
  const filteredColaboradores = data.filter((colaborador) =>
    Object.values(colaborador).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {filteredColaboradores.map((colaborador, index) => (
          <tr key={index}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableUno;
