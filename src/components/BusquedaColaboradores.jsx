import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function BusquedaColaboradores({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Buscar..."
        aria-label="Buscar..."
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Button variant="outline-secondary" id="button-addon2">
        Buscar
      </Button>
    </InputGroup>
  );
}
