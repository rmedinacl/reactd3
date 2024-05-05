import Table from "react-bootstrap/Table";

export const TableUsers = ({ users, onDelete, filteredData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.length ? (
          filteredData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>{user.edad}</td>
              <td>{user.cargo}</td>
              <td>{user.telefono}</td>
              <td>
                <button
                  onClick={() =>
                    confirm("Estas seguro 😰?") && onDelete(user.id)
                  }
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : users?.length ? (
          users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>{user.edad}</td>
              <td>{user.cargo}</td>
              <td>{user.telefono}</td>
              <td>
                <button
                  onClick={() =>
                    confirm("Estas seguro 😰?") && onDelete(user.id)
                  }
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}>
              <h1>No hay datos 😁</h1>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
