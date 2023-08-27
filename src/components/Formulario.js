import { useEffect, useState } from "react";

const formularioInicial = {
    nombre: "",
    apellido: "",
    edad: "",
    direccion: "",
    id: null,
  }

const Formulario = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(formularioInicial);

useEffect(() => {
    if(dataToEdit) {
        setForm(dataToEdit);
    }
    else {
        setForm(formularioInicial);
    }
},[dataToEdit]
);

    const handleChange =(e) => {
        setForm({
            ...form,[e.target.name]: e.target.value,
        })
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        
        if(form.id === null){
            createData(form);
        }
        else{
            updateData(form);
        }

        handleReset();
    };

    const handleReset =(e) => {
        setForm(formularioInicial);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre}/>
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} value={form.apellido}/>
                <input type="text" name="edad" placeholder="Edad" onChange={handleChange} value={form.edad}/>
                <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} value={form.direccion}/>
                <input type="submit" value="Enviar" onClick={handleSubmit}/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default Formulario;