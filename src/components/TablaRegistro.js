const TablaRegistro = ({el, setDataToEdit, deleteData}) => {
let{nombre,apellido,edad,direccion,id} = el;

    return (
        <tr>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{edad}</td>
            <td>{direccion}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default TablaRegistro;