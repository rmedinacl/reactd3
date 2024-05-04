import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export const Formulario = ({ onChange, handleErrors }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const nombreRegex = /^.{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/; // 8-15 caracteres, una mayúscula, una minúscula, un número y un carácter especial
    const { nombre, correo, password, passwordRepeat } = event.target;

    if (
      !nombre.value ||
      !correo.value ||
      !password.value ||
      !passwordRepeat.value
    ) {
      handleErrors("Todos los campos obligatorios");
      return;
    }
    if (!nombreRegex.test(nombre.value)) {
      handleErrors("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (!emailRegex.test(correo.value)) {
      handleErrors(
        "Verifica que el correo sea válido y no contenga espacios en blanco"
      );
      return;
    }

    if (!passwordRegex.test(password.value)) {
      handleErrors(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
      );
      return;
    }

    if (password.value != passwordRepeat.value) {
      handleErrors("Las contraseñas no coinciden");
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
          placeholder="Nombre"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="correo">
        <Form.Control
          name="correo"
          type="email"
          placeholder="Correo"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Control
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Control
          name="passwordRepeat"
          type="password"
          placeholder="Verifica contraseña"
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

Formulario.propTypes = {
  onChange: PropTypes.func,
  handleErrors: PropTypes.func,
};
