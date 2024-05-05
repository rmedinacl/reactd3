import Formulario from "./Form";
import PropTypes from "prop-types";
import AlertForm from "./Alert";
import Card from "react-bootstrap/Card";

const Registro = ({ handleUser, setFormErrors, formErrors }) => {
  return (
    <div>
      <Card className="card">
        <p className="sub">Usa tu email para registrarte</p>
        <Formulario handleUser={handleUser} setFormErrors={setFormErrors} />
      </Card>
      <AlertForm formErrors={formErrors} />
    </div>
  );
};

Registro.propTypes = {
  onChange: PropTypes.func,
  handleErrors: PropTypes.func,
  formErrors: PropTypes.string,
};

export default Registro;
