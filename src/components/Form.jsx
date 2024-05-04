import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export const Formulario = ({ onChange, handleErrors }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const nombreRegex = /^.{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const edadRegex = /^\d+$/; 
    const cargoRegex = /^.{5,}$/; 
    const telefonoRegex = /^\d{9}$/;

    const { nombre, correo, edad, cargo, telefono } = event.target;

    if (
      !nombre.value ||
      !correo.value ||
      !edad.value ||
      !cargo.value ||
      !telefono.value 
    ) {
      handleErrors("Todos los campos obligatorios");
      return;
    }
    if (!nombreRegex.test(nombre.value)) {
      handleErrors("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (!emailRegex.test(correo.value)) {
      handleErrors("Verifica que el correo sea válido y no contenga espacios en blanco.");
      return;
    }

    if (!edadRegex.test(edad.value)) {
      handleErrors("Ingresar solo números en el campo edad.");
      return;
    }

    if (!cargoRegex.test(cargo.value)) {
      handleErrors("El cargo debe tener al menos 5 caracteres.");
      return;
    }

    if (!telefonoRegex.test(telefono.value)) {
      handleErrors("El teléfono debe tener 9 dígitos");
      return;
    }

    handleErrors("Registro exitoso");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Nombre del colaborador"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="correo">
        <Form.Control
          name="correo"
          type="email"
          placeholder="Email del colaborador"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="edad">
        <Form.Control
          name="edad"
          type="number"
          placeholder="Edad del colaborador"
          onChange={onChange}
          pattern="[0-9]*"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cargo">
        <Form.Control
          name="cargo"
          type="text"
          placeholder="Cargo del colaborador"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="telefono">
        <Form.Control
          name="telefono"
          type="number"
          placeholder="Teléfono del colaborador"
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Agregar colaborador
      </Button>
    </Form>
  );
};

Formulario.propTypes = {
  onChange: PropTypes.func,
  handleErrors: PropTypes.func,
};
