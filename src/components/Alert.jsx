import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

const Alerta = ({ formErrors, color }) => {
  return (
    <>
      {formErrors && (
        <Alert className="alerta" key={color} variant={color}>
          {" "}
          {formErrors}
        </Alert>
      )}
    </>
  );
};

Alerta.propTypes = {
  formErrors: PropTypes.string,
  color: PropTypes.string,
};

export default Alerta;
