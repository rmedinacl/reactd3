import Tareas from './components/Tareas'
import { useState } from 'react'
import { BaseColaboradores } from './database/data'
import './App.css'

function App() {
  const [data, setData] = useState(BaseColaboradores);
	const [filteredData, setFilteredData] = useState([]);

	const [form, setForm] = useState({
		id: '',
		nombre: '',
		correo: '',
		edad: '',
		cargo: '',
		telefono: '',
	});

	const [formState, setFormState] = useState('');

  const handleSubmit = (event) => {
		event.preventDefault();
		const id = data.length + 1;
		const { nombre, correo, edad, cargo, telefono } = event.target;

		if (
			!nombre.value ||
			!correo.value ||
			!edad.value ||
			!cargo.value ||
			!telefono.value
		) {
			setFormState('Todos los campos son requeridos');
		} else {
			const formData = {
				id,
				nombre: nombre.value,
				correo: correo.value,
				edad: edad.value,
				cargo: cargo.value,
				telefono: telefono.value,
			};

			handleAddUser(formData);
		}
	};

  return (
    <>
      <Tareas />
    </>
  )
}

export default App
