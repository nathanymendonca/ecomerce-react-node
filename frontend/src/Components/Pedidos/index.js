export default function Pedido(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.endereco}</td>
            <td>{props.telefone}</td>
            <td>{props.produto}</td>
            <td>{props.valor}</td>
            <td>{props.quantidade}</td>
            <td>{props.total}</td>
        </tr>
        
    )
  }