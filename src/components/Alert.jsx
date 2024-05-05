import Alert from "react-bootstrap/Alert";

function AlertForm({ formErrors }) {
  return (
    <>
      {formErrors && (
        <Alert
          variant={
            formErrors === "Colaborador agregado exitosamente"
              ? "success"
              : "danger"
          }
        >
          {formErrors}
        </Alert>
      )}
    </>
  );
}

export default AlertForm;
