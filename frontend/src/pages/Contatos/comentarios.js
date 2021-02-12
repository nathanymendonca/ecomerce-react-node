export default function Comentarios(props) 
{

    return (

        
        <tr>
            <td>{props.id_pedido}</td>
            <td>{props.nome} </td>
            <td>{props.msg} </td>
            <td>{props.data} </td>

    </tr>

    );
 }