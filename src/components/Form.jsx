import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import AlertForm from "./Alert";

const Formulario = ({ handleUser, formErrors, setFormErrors }) => {
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const enviarFormulario = (event) => {
    event.preventDefault();
    const { nombre, correo, edad, cargo, telefono } = form;
    const id = Date.now();

    const nombreRegex = /^.{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const edadRegex = /^\d+$/;
    const cargoRegex = /^.{5,}$/;
    const telefonoRegex = /^\d{9}$/;

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setFormErrors("Todos los campos son obligatorios");
      return;
    }
    if (!nombreRegex.test(nombre)) {
      setFormErrors("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (!emailRegex.test(correo)) {
      setFormErrors(
        "Verifica que el correo sea válido y no contenga espacios en blanco."
      );
      return;
    }

    if (!edadRegex.test(edad)) {
      setFormErrors("Ingresar solo números en el campo edad.");
      return;
    }

    if (!cargoRegex.test(cargo)) {
      setFormErrors("El cargo debe tener al menos 5 caracteres.");
      return;
    }

    if (!telefonoRegex.test(telefono)) {
      setFormErrors("El teléfono debe tener 9 dígitos");
      return;
    } else {
      const formData = {
        id,
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };

      handleUser(formData);
      setForm({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setFormErrors("Colaborador agregado exitosamente");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Form onSubmit={enviarFormulario}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Nombre del colaborador"
            value={form.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="correo">
          <Form.Control
            name="correo"
            type="email"
            placeholder="Email del colaborador"
            value={form.correo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="edad">
          <Form.Control
            name="edad"
            type="number"
            placeholder="Edad del colaborador"
            value={form.edad}
            onChange={handleChange}
            pattern="[0-9]*"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cargo">
          <Form.Control
            name="cargo"
            type="text"
            placeholder="Cargo del colaborador"
            value={form.cargo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefono">
          <Form.Control
            name="telefono"
            type="tel"
            placeholder="Teléfono del colaborador"
            value={form.telefono}
            onChange={handleChange}
          />
        </Form.Group>

        {formErrors && (
          <AlertForm
            className={`text-${
              formErrors === "Colaborador agregado exitosamente"
                ? "success"
                : "danger"
            }`}
            formErrors={formErrors}
          ></AlertForm>
        )}

        <Button variant="success" type="submit">
          Agregar colaborador
        </Button>
      </Form>
    </>
  );
};

Formulario.propTypes = {
  handleUser: PropTypes.func.isRequired,
  formErrors: PropTypes.string.isRequired,
  setFormErrors: PropTypes.func.isRequired,
};

export default Formulario;
