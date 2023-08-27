import { useState } from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";

const tablaInicial = [
    {
        id: 1,
        nombre: 'Ezequiel',
        apellido: 'Minetti',
        edad: 32,
        direccion: 'Hidalgo 1064',
    },
    {
        id: 2,
        nombre: 'Pablo',
        apellido: 'Minetti',
        edad: 58,
        direccion: 'Aguilar 828',
    },
    {
        id: 3,
        nombre: 'Eliana',
        apellido: 'Minetti',
        edad: 30,
        direccion: 'Av. Avellaneda 1863',
    },
    {
        id: 4,
        nombre: 'Mónica',
        apellido: 'Taglioli',
        edad: 58,
        direccion: 'Unanue 828',
    }
]

const DatosPersonales = () => {
    const[tabla, setearTabla] = useState(tablaInicial);
    const[dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setearTabla([...tabla, data])
    };
    const updateData = (data) => {
        let newData = tabla.map(el => el.id===data.id ? data: el);
        setearTabla(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`)

        if (isDelete){
            let newData = tabla.filter(el => el.id !== id)
            setearTabla(newData)
        }
        else{
            return;
        }
    };

    return (
        <div>
            <Formulario createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
            <Tabla data={tabla} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )
}

export default DatosPersonales;