import TablaRegistro from "./TablaRegistro";

const Tabla = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {/*data.length === 0 ? (
                        <tr>
                            <td colSpan="5">Sin datos</td>
                        </tr>
                        ) : (
                            data.map((el) => 
                            <tr>
                                <td>{el.nombre}</td>
                                <td>{el.apellido}</td>
                                <td>{el.edad}</td>
                                <td>{el.direccion}</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>))*/}
                    {data.length === 0 ? (<tr><td colSpan="5">Sin datos</td></tr>) : (data.map((el) => <TablaRegistro key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>))}
                    <tbody>
                </tbody>
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;