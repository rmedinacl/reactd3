import Alert from "react-bootstrap/Alert";

function AlertForm({ formErrors }) {
  return (
    <>
      {formErrors && (
        <Alert
          variant={formErrors === "Registro exitoso" ? "success" : "danger"}
        >
          {formErrors}
        </Alert>
      )}
    </>
  );
}

export default AlertForm;
